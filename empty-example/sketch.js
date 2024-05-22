let cars;

function preload() {
  cars = loadTable('cars.csv', 'csv', 'header');
  // cars = loadTable('cars_middle.csv', 'csv', 'header')
  // cars = loadTable('cars_strong.csv', 'csv', 'header')
  // cars = loadTable('cars_weak.csv', 'csv', 'header')
  
}

function setup() {
  rowCount = cars.getRowCount();
  print(rowCount)
  createCanvas(2000, 6000);
  // background("#DFECFD");
  var c=0
  while(c<rowCount){
    push()

    for(var i = 0; i<5; i++){//rowCount
      MPG = cars.getNum(c,2)
      cylinders = cars.getNum(c,3)
      horsepower= cars.getNum(c,4)
      weight= cars.getNum(c,5)
      car_year= cars.getNum(c,6)
      car_origin= cars.getString(c,7)

      drawDora(MPG, cylinders, horsepower, weight, car_year, car_origin)
      translate(200,-200)
      c++
      if(c==rowCount){
        break
      }
    }
    pop()

    translate(0,400)
  }
}

function drawDora(MPG, cylinders, horsepower, weight, car_year, car_origin) {
  translate(200,200);  //中心为坐标系
  
  strokeWeight(3);
  stroke("#000000");
  
  if (car_origin === "US") {
    fill("#08acda"); // Blue for US
  } else if (car_origin === "Japan") {
    fill("#e3151d"); 
  } else {
    fill("#daab21"); 
  }

  
  push()
    scale((weight+4000)/7000,1) //weight
    //蓝色脸
    beginShape();
      vertex(-91,99);
      bezierVertex(-144, 48, -154.5, -15, -136.75, -63.55);
      bezierVertex(-119, -112.1, -73, -146, 0, -146);
      bezierVertex(73, -146, 119, -112.1, 136.75, -63.55)
      bezierVertex(154.5, -15, 144, 48, 91, 99)
    endShape();
  
    //白色脸
    fill("#FFFFFF");
    beginShape();
      vertex(-84.8,99);
      bezierVertex(-142,35,-138,-10,-123.5,-44.25);
      bezierVertex(-109,-78.5,-84,-102,0,-102);
      bezierVertex(84,-102,109,-78.5,123.5,-44.25);
      bezierVertex(138,-10,142,35,84.8,99);
    endShape();


  pop()
  
  //眼睛
  fill("#FFFFFF");
  a=(cylinders-4)*8;                      //变量horsepower
  ellipse(-29,-102,58,74.1);
  ellipse(29,-102,58,74.1);
  strokeWeight(6);
  ellipse(-40+a,-91,12,16,5);
  ellipse(17+a,-91,12,16,5);
  strokeWeight(3);
  
  //眼睑
  startX = 0;
  startY = -103;
  
  if (horsepower<80){
    length = 55;
    angle = 6;
  }else if(horsepower>=80 && horsepower<=120){
    length = 57;
    angle = 0;

  }else if(horsepower>120 && horsepower<=150){
    length = 55;
    angle = -10;
  }else if(horsepower>150 && horsepower<=180){
    length = 55;
    angle = -20;
  }else if(horsepower >180){
    length = 55;
    angle = -30;
  }


  let radians = angle * (Math.PI / 180);

  let endX = startX + length * cos(radians);
  let endY = startY + length * sin(radians);

  line(startX, startY, endX, endY);
  line(startX, startY, -endX, endY);

  // line(0,-103,-49,-129);    //8
  // line(0,-103,49,-129);
  
  //腮红和鼻子，不用管
  strokeWeight(0);
  fill("#FDC2C3");
  ellipse(-65.7,-40,50.4,35.2);
  ellipse(65.7,-40,50.4,35.2);
  strokeWeight(4);
  stroke("#F86170");
  line(-60,-35,-56,-45);
  line(-70,-35,-66,-45);
  line(-80,-35,-76,-45);
  line(60,-45,56,-35);
  line(70,-45,66,-35);
  line(80,-45,76,-35);
  
  //鼻子
  strokeWeight(3);
  stroke("#000000");
  line(0,-41,0,77);  
  fill("#F86170");
  circle(0,-60,40)
  strokeWeight(0);
  fill("#FFFFFF");
  circle(-2,-65,12)
  
  //胡子
  c=-(MPG+15)/37*45;                  //变量MPG
  strokeWeight(4);
  line(-70,-41,-100+c,-52);
  line(-73,-23,-106+c,-23);
  line(-70,-10,-100+c,7);
  line(70,-41,100-c,-52);
  line(73,-23,106-c,-23);
  line(70,-10,100-c,7);
  
  //嘴巴
  strokeWeight(3);
  noFill();

  beginShape();
  vertex(-105,30);
  bezierVertex(-79,64,-35,77,0,77);
  endShape();
  
  beginShape();
  vertex(105,30);
  bezierVertex(79,64,35,77,0,77);
  endShape();
  
  //舌头
  beginShape();
  fill("#FF7B88");
  vertex(-102.1,33.5);
  bezierVertex(-97.6,-12,-35.8,-0.8,-56.3,66.1);
  bezierVertex(-73.4,59,-89.6,48.5,-102.1,33.5);
  endShape();
  line(-82.5,51.7,-81.2,36);
  

  
  push()
    scale((weight+4000)/7000,1) //weight
  //身体
  beginShape();

  
  if (car_origin === "US") {
    fill("#08acda"); // Blue for US
  } else if (car_origin === "Japan") {
    fill("#e3151d"); 
  } else {
    fill("#daab21"); 
  }
  vertex(-92,112);
  bezierVertex(-108,127.7,-117.6,143.6,-122.5,169.1);
  line(-122.5,169.1,122.5,169.1);
  vertex(122.5,169.1);
  bezierVertex(117.6,143.6,108,127.7,92,112);
  endShape();
  
  beginShape();
  fill("#FFFFFF");
  vertex(-59,114);
  bezierVertex(-77.6,125.9,-88,148,-90.5,169.1);
  line(-90.5,169.1,90.5,169.1);
  vertex(90.5,169.1);
  bezierVertex(88,148,77.6,125.9,59,114);
  endShape();
  

  
  //项圈
  strokeWeight(3);
  fill("#F56272");
  rectMode(CENTER);
  rect(0,106.33,200,19.34,10);
  
  pop()
  //铃铛，年份
  push()
  strokeWeight(3);
  ringCenter= (car_year-76)*70/12
  translate(ringCenter,0)

  fill("#ffc35b");
  circle(ringCenter,127.55,47);
  line(ringCenter,133,ringCenter,151);
  fill("#F39621");
  circle(ringCenter,133,11);
  fill("#F39621");
  rectMode(CENTER);
  rect(ringCenter,120,55,10,10);
  pop()
}
