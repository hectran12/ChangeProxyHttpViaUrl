
    chrome.webRequest.onBeforeRequest.addListener(
        function(details) {
            var url = new URL(details.url);
            if (url.hostname === "ktshort.com") {
                var params = url.searchParams;
                var proxyParam = params.get("proxy");
                if (proxyParam === "false") {
                    chrome.proxy.settings.clear({scope: "regular"});
                    
                } else {
                    var proxy = proxyParam.split(":");
                    var config = {
                        mode: "fixed_servers",
                        rules: {
                            singleProxy: {
                                scheme: "http",
                                host: proxy[0],
                                port: parseInt(proxy[1])
                            },
                            bypassList: ["localhost"]
                        }
                    };
                    chrome.proxy.settings.set({value: config, scope: "regular"});
                    setInterval(function() {
                        document.getElementById("status").innerText = "Not using proxy";
                    }, 1000);
                }
            }
        },
        {urls: ["<all_urls>"]},
        ['blocking']
    );
    