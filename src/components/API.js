
import React,{ useState, useEffect, useRef,forwardRef,useImperativeHandle } from "react";
import "../App.css" 
function API({ date,month,year },ref) {
  const btnref = useRef(null);
  const [count, Setcount] = useState(0);
  const [showimage,Setshowimage]=useState(false);
  let [img, Setimg] = useState("");
useImperativeHandle(ref,()=>({
    callApi() {
        const data =
          '{"style":{"moonStyle":"default","backgroundStyle":"stars","backgroundColor":"#000000","headingColor":"#ffffff","textColor":"#ffffff"},"observer":{"latitude":33.775867,"longitude":-84.39733,"date":"'+date+'-'+month+'-' +year +'"},"view":{"type":"portrait-simple","parameters":{}}}';
    
        const xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
    
        xhr.addEventListener("readystatechange", function () {
          if (this.readyState === this.DONE) {
            const data = JSON.parse(this.responseText);
            console.log(data.data.imageUrl);
            Setimg(data.data.imageUrl);
            Setshowimage(true);
          }
        });
    
        xhr.open("POST", "https://api.astronomyapi.com/api/v2/studio/moon-phase");
        xhr.setRequestHeader(
          "Authorization",
          "Basic OGJhZTE5MTAtYjhkNC00ZjZkLThhNTgtNjhmYjViOWU2YjUxOjc5MzQ0ZTJhMTFlYzM1NTRiYWM0OTBkM2YxM2MwOGJkYWQ4MjBjNGU4NjAyODVlYTYwMGNmNjA1YjUzYWEzNGU5Y2NjZDAxNGYxYzU5N2ZkZWEyMDE2YzkxZDM2NWRiZTM2M2RhZTlmNDA1NTQyNDJhZWYzZjViMDJhZmM2ZjQ4YTc4ZWI3OGEyYzFhY2EzOWM3OTM2MTFkM2Y5ZWRjNDYyYzM4NDhkYzRmNTcxYzdmNGE3ZGM1MzBmMzU2ZjkwODU3NGU5NzgxYjY0ODM4OTkyZjQ5NWJjOWUyODVjN2Ey"
        );
    
        xhr.send(data);
      },

}));
  
  return (
    <div>
      <br />

   {showimage  && <center><img className="moonimage sbdmoon" src={img} alt="Loading..." /></center> }
    </div>
  );
}

export default forwardRef(API);

