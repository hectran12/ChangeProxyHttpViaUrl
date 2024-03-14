# ChangeProxyHttpViaUrl
[HÃY TỰ CUSTOM HOSTNAME TRONG FILE BACKGROUND.JS NẾU BẠN KHÔNG TIN TƯỞNG TÊN MIỀN KTSHORT.COM CỦA MÌNH]
<h1>Cách đổi miền</h1>
<pre>
GỐC: if (url.hostname === "ktshort.com")
ĐỔI: if (url.hostname === "miền của bạn , đặt đại cũng được.")
</pre>

<hr>
<h1><Demo sử dụng</h1>
Đổi proxy:
<pre>
  https://ktshort.com/?proxy={ip}:{port}
</pre>

Gỡ proxy:
<pre>
  https://ktshort.com/?proxy=false
</pre>


<h3>Nếu tự custom miền riêng thì nhớ đổi nhé</h3>

