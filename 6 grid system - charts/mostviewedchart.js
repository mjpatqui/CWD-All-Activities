window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
      theme: "dark2", // "light1", "light2", "dark1"
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Top 10 Most Viewed YouTube Videos"
      },
      axisX: {
        margin: 10,
        labelPlacement: "inside",
        tickPlacement: "inside"
      },
      axisY2: {
        title: "Views (in billion)",
        titleFontSize: 14,
        includeZero: true,
        suffix: "bn"
      },
      data: [{
        type: "bar",
        axisYType: "secondary",
        yValueFormatString: "#,###.##bn",
        indexLabel: "{y}",
        dataPoints: [
          { label: "Phoenix", y: 3.25 },
          { label: "Undangon Ta Ni", y: 3.32 },
          { label: "Will You Stay", y: 3.63 },
          { label: "Akin Ka Na Lang", y: 3.72 },
          { label: "Gusto Ko Nang Bumitaw", y: 3.90 },
          { label: "Mirror", y: 4.32 },
          { label: "Ikaw Ay Ako", y: 4.66 },
          { label: "Love You Still", y: 4.91 },
          { label: "Trophy", y: 6.13 },
          { label: "Di Mapaliwanag", y: 6.88 }
        ]
      }]
    });
    chart.render();
      
    }