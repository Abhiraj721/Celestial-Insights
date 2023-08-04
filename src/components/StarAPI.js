import React, {
  useState,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";
import "../App.css";
function StarAPI({ date, constellation, style }, ref) {
  const [imgUrl, Setimgurl] = useState("");
  const resultvisi=useRef(null);
  const [btnpressed,Setbtnpressed]=useState(false);
  let year = date[0];
  let month = date[1];
  let day = date[2];
  const formattedDate = `${year}-${month}-${day}`;
  {
    console.log(formattedDate + constellation+ style);
  }
  const data =
    '{"style":"' +
    style +
    '","observer":{"latitude":33.775867,"longitude":-84.39733,"date":"' +
    formattedDate +
    '"},"view":{"type":"constellation","parameters":{"' +
    "constellation" +
    '":"' +
    constellation +
    '"}}}';
  useImperativeHandle(ref, () => ({
    Starapicall() {
      Setbtnpressed(true);
      const xhr = new XMLHttpRequest();
      xhr.withCredentials = true;

      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
          const data = JSON.parse(this.responseText);
          const url = data.data.imageUrl;
          Setbtnpressed(false);
          Setimgurl(url);
          console.log(data);
        }
      });

      xhr.open("POST", "https://api.astronomyapi.com/api/v2/studio/star-chart");
      xhr.setRequestHeader(
        "Authorization",
        "Basic OGJhZTE5MTAtYjhkNC00ZjZkLThhNTgtNjhmYjViOWU2YjUxOjc5MzQ0ZTJhMTFlYzM1NTRiYWM0OTBkM2YxM2MwOGJkYWQ4MjBjNGU4NjAyODVlYTYwMGNmNjA1YjUzYWEzNGU5Y2NjZDAxNGYxYzU5N2ZkZWEyMDE2YzkxZDM2NWRiZTM2M2RhZTlmNDA1NTQyNDJhZWYzZjViMDJhZmM2ZjQ4YTc4ZWI3OGEyYzFhY2EzOWM3OTM2MTFkM2Y5ZWRjNDYyYzM4NDhkYzRmNTcxYzdmNGE3ZGM1MzBmMzU2ZjkwODU3NGU5NzgxYjY0ODM4OTkyZjQ5NWJjOWUyODVjN2Ey"
      );

      xhr.send(data);
    },
  }));

  return (
    <div ref={resultvisi} className="result">
    {btnpressed ?  <h5 className="head">Result</h5> : <></>}
     {!btnpressed ? <img className="starimage" src={imgUrl} alt="" /> :<div className="blink-2"> <span className=" head loading">Loading...</span></div>}
    </div>
  );
}
export default forwardRef(StarAPI);
