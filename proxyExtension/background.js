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
                var proxyConfig = {
                    scheme: "http",
                    host: proxy[0],
                    port: parseInt(proxy[1])
                };

                var username = params.get("username");
                var password = params.get("password");

                if (username !== null && password !== null) {
                    proxyConfig.username = username;
                    proxyConfig.password = password;
                }

                var config = {
                    mode: "fixed_servers",
                    rules: {
                        singleProxy: proxyConfig,
                        bypassList: ["localhost"]
                    }
                };

                chrome.proxy.settings.set({value: config, scope: "regular"});
                setInterval(function() {
                    document.getElementById("status").innerText = "Using proxy: " + proxyParam;
                }, 1000);
            }
        }
    },
    {urls: ["<all_urls>"]},
    ['blocking']
);
