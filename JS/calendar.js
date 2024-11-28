const calendar = document.getElementById("calendar");

const calendarMake = () => {
    /* カレンダーを表示する関数 */
    let strList = ["Mon","Tue","Wed","Thr","Fri","Sat","Sun"];
    let strShow = "";
    //頭の処理
    strShow += "<table align='right'><thead><tr>";
    strList.forEach((date) => {
        let str = "<th class='"+ date +"'>" + date + "</th>";
        strShow += str;
    });
    strShow += "</tr></thead>"
    //カレンダー部分の処理
    const dayStarts = 1;
    const dayEnds = 31;
    const dayShowingEnd = 25;
    const dateStarts = 6; // 0:Mon ... 6:Sun
    let i = 1;
    strShow += "<tbody>";
    while(i <= dayEnds+14){
        strShow += "<tr>";
        for(let j=0;j<7;j++){
            let stSr = "<td class='"+ strList[j]+"'";
            if(i > dayShowingEnd+dateStarts){str += "class='pseudo'"}
            if(i > dateStarts && i <= (dayEnds+dateStarts)){ str += ">"+ (i-dateStarts) +"</td>"; }
            else{str += ">" + " " + "</td>";}
            strShow += str;
            i++;
        }
        strShow += "</tr>";
    }
    strShow += "</tbody></table>";
    calendar.innerHTML = strShow;
}

calendarMake();