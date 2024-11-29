const calendar = document.getElementById("calendar");

const calendarMake = () => {
    /* カレンダーを表示する関数 */
    let strList = ["Mon","Tue","Wed","Thr","Fri","Sat","Sun"];
    let strShow = "";
    //頭の処理
    strShow += "<table align='right'><thead><tr>";
    strList.forEach((date) => {
        let str = "<th class='heads "+ date +"'>" + date + "</th>";
        strShow += str;
    });
    strShow += "</tr></thead>"
    //カレンダー部分の処理
    const available = [1];
    const dayShowingEnd = 25;
    const dateStarts = 6; // 0:Mon ... 6:Sun
    let i = 1;
    strShow += "<tbody>";
    while(i <= 35){
        strShow += "<tr>";
        for(let j=0;j<7;j++){
            let str = "<td class='days "+ strList[j];
            //if(i > dayShowingEnd+dateStarts){str += " pseudo"}
            if(i > dateStarts && i <= (dayShowingEnd+dateStarts)){ str += "'>"+ "<a href='" + getItem(i-dateStarts) + "'>" + (i-dateStarts) +"</a></td>"; }
            else{str += "'>" + " " + "</td>";}
            strShow += str;
            i++;
        }
        strShow += "</tr>";
    }
    strShow += "</tbody></table>";
    calendar.innerHTML = strShow;
}

const getItem = async(i) =>{
    const response = await fetch("./JSON/address.json?v=" + Date.now());
    const data = await response.json();
    return data[i];
}

calendarMake();