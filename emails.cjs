window.addEventListener("load", datalist, false)
function datalist() {
  var datalistoptions = [atob("bG9oYXJlQGxhbmNhc3RlcmhpZ2gubGFuY3Muc2NoLnVr"), atob("QU1pZGRsZXRvbkBsYW5jYXN0ZXJoaWdoLmxhbmNzLnNjaC51aw=="), atob("dHJ1YmVyeUBsYW5jYXN0ZXJoaWdoLmxhbmNzLnNjaC51aw=="), atob("bmNoZWVzYnJvdWdoQGxhbmNhc3RlcmhpZ2gubGFuY3Muc2NoLnVr "), atob("bm1vb3JieUBsYW5jYXN0ZXJoaWdoLmxhbmNzLnNjaC51aw=="), atob("bWFsZHJlbkBsYW5jYXN0ZXJoaWdoLmxhbmNzLnNjaC51aw=="), atob("TGV2YW5zQGxhbmNhc3RlcmhpZ2gubGFuY3Muc2NoLnVr"), atob("ZGJyb3duQGxhbmNhc3RlcmhpZ2gubGFuY3Muc2NoLnVr"), atob("SkJpcmRzYWxsQGxhbmNhc3RlcmhpZ2gubGFuY3Muc2NoLnVr"), atob("Q2hlcnlsLkhhbGVAbGFuY2FzdGVyaGlnaC5sYW5jcy5zY2gudWs")]
  var options = document.getElementById("browser-input-options")
  datalistoptions.forEach(function(item){
    var datalist = document.createElement("option")
    datalist.value = item
    options.appendChild(datalist)
  })
}
