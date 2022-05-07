$(document).ready(function () {

    let sec = 0;
    let value;
    let count = 0;

    let time = san => {
        let minute = Math.floor(san / 60);
        let second = san - minute * 60;

        let timeResult = `${minute < 10? "0"+minute : minute}:${second < 10 ? "0"+second : second}`

        return timeResult;
    }

    $("#start").on("click", () => {
        clearInterval(value);
        value = setInterval(() => {
            sec++;
            let sn = time(sec);
            $("#watch").html(sn);
        }, 1000)
    })
    $("#stop").on("click", () => {
        clearInterval(value);
    });
    $("#reset").on("click", () => {
        sec = 0;
        clearInterval(value);
        $("#watch").html("00:00");
        $(".content").html("");
    });
    $("#lap").on("click", () => {
        count++;
        let p = $("<p>");
        p.html(`Lap ${count}: ${time(sec)}`);
        $(".content").append(p);
    });
})