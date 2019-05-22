window.addEventListener('load',init,false);

/**function(){
	ballImg.onload=function{
		init();
	}
}*/

function init(){

	can = document.getElementById('can');
	g = can.getContext('2d');

	mouseX=10;
	mouseY=10;
	orgX=200;
	orgY=700;
	buOrgY=orgY;
	posX=orgX;
	posY=orgY;
	i=0;
	follow=phek=false;
	b=h=cos=deg=deg2=sX=sY=0;
	dX=dY=0;
	t=0;
	s=110;
	grav=10;
	r=10+12.5;
	posRX=posX-r;
	posRY=posY-r;
	tt2=1;
	ft2=0;
	size=15;
	imgC=0;
	ballImg = new Image();
	ballImg.src = './basketball_files/ball.png';
	ballDeg=0;
	tX=0;
	orgXbu=0;
	tY=0;
	baseLimit=orgY+2*r;
    dropB=false;
	hoopImg = new Image();
	hoopImg.src = './basketball_files/hoop.png';

	

	//window.addEventListener('keydown',keyDown,false);
	//window.addEventListener('keyup',keyUp,false);
	can.addEventListener('mousedown',mDown,false);
	can.addEventListener('mousemove',mMove,false);
	can.addEventListener('mouseup',mUp,false);

	can.addEventListener('touchstart',touchStart,false);
	can.addEventListener('touchmove',touchMove,false);
	can.addEventListener('touchend',touchEnd,false);

	document.getElementById("mess").innerHTML="yoyo";

	ballImg.onload=imgC++;
	hoopImg.onload=imgC++;
	if(imgC==2){
		run();
	}
//	run();
	
}

function run(){

		if(phek){
		tX+=0.1;
		tY+=0.1;
			dX=sX*tX;
			dY=(sY*tY)-(grav/2*tY*tY);

			posX=orgX+dX;
			posY=orgY-dY;
			t+=0.1;

			document.getElementById("mess").innerHTML="base:"+b+ "<br>h:"+h+"<br>deg:"+deg+"<br>deg2:"+deg2+"<br>sX:"+sX+"<br>sY:"+sY+
			"<br>dX:"+dX+"<br>dY:"+dY+"<br>t:"+t+"<br>posX:"+posX+"<br>posY:"+posY;
			document.getElementById("mess").innerHTML="base:"+b+ "<br>h:"+h+"<br>deg:"+deg+"<br>deg2:"+deg2+"<br>sX:"+sX+"<br>sY:"+sY+
			"<br>dX:"+dX+"<br>dY:"+dY+"<br>t:"+t+"<br>posX:"+posX+"<br>posY:"+posY
			+"<br>orgX:"+orgX
			+"<br>orgY:"+orgY
			+"<br>sX:"+sX
			+"<br>tX:"+tX
			+"<br>t:"+t
			+"<br>posY:"+posY
			+"<br>baseLimit:"+baseLimit
			;

		}

		if(tY>=(s*Math.sin(deg)/(grav/2)) ||( posY>=orgY && follow==false )){
			t=0;
			tX=0;
			tY=0;
			//phek=false;
			dX=0;
			dY=0;
			//posY=baseLimit-2*r;
			orgX=orgXbu;
			orgX=posX;
			orgY=buOrgY;
			posY=orgY;
			//sX=0;
			//sY=0;
			//deg=3.14*180*((180*3.14*deg)-1);
			//sX=sX-Math.cos(deg);
    	    //sY=sY-Math.sin(deg);
			sY-=5;
			if(sY<=0){
				phek=false;
			}
			//sX=sX>0?sX-2:sX+2;
			//baseLimit=orgY+2*r;

			document.getElementById("mess").innerHTML="base:"+b+ "<br>h:"+h+"<br>deg:"+deg+"<br>deg2:"+deg2+"<br>sX:"+sX+"<br>sY:"+sY+
			"<br>dX:"+dX+"<br>dY:"+dY+"<br>t:"+t+"<br>posX:"+posX+"<br>posY:"+posY
			+"<br>orgX:"+orgX
			+"<br>orgY:"+orgY
			+"<br>sX:"+sX
			+"<br>tX:"+tX
			+"<br>t:"+t
			+"<br>posY:"+posY
			+"<br>baseLimit:"+baseLimit
			;

			//deg-=0.1;
			//dropB=true;
		}

		if(!follow){

		if(posX>=1600-2*r){
			posX=1600-2*r;
			orgXbu=orgX;
			orgX=1600-2*r;
			tX=0;
			sX-=2;
			sX=-sX;
		}

		if(posX<=0+2*r){
			posX=0+2*r;
			orgXbu=orgX;
			orgX=0+2*r;
			tX=0;
			sX+=2;
			sX=-sX;
		}

		/*if(posY>=baseLimit-2*r){
			posY=baseLimit-2*r;
			orgYbu=orgY;
			orgY=baseLimit-2*r;
			tY=0;
			//sY-=2;
		}*/
	}


	if(dropB){
		sY-=sY;
		dX=sX*tX;
		dY=(sY*tY)-(g/2*t*t);
		posX=orgX+dX;
		posY=orgY+dY;

		tX+=0.1;
		tY+=0.1;
	}

	    paint();
		//ai();
	
		fps =  window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ;
		fps(run); 
		
		//setInterval(run,3000);
		//mouseX++;
		//run();
	}

	function drop(){

		
	}

	function r(){
		run();
	}
	
	

	function thik(tk){
		if(this.tk>=(s*Math.sin(deg)/(grav/2) )){
		this.tk=this.tk-(s*Math.sin(deg)/(grav/2) );
		
	    }
	    return(this.tk);
	}



function paint(){

	
	g.clearRect(0,0,1600,1200);

	//for(int i=0;i<=800;i+=roadW)
	//circle();
	g.drawImage(hoopImg,200,250);

	g.beginPath();
	g.arc(posX,posY,r,0,2*Math.PI);
	g.fill();

	
	if(phek){
	ballDeg+=4;

	g.save();
	g.translate(posX,posY);
	g.rotate(ballDeg*3.14/180);
	g.drawImage(ballImg,0-r,0-r);
	g.restore();
	}
	else{
		g.drawImage(ballImg,(posX-(r/1)),(posY-(r/1)));
	}
	g.strokeRect(posRX,posRY,r*2,r*2);

	ft=(s*Math.sin(deg)/(grav/2) )+1;

	if(ft2!=ft){
	
	time=(s*Math.sin(deg)/(grav/2) )/10;
	tt=time;
	t1=1+tt2;
	t2=t1+tt;
	t3=t2+tt;
	t4=t3+tt;
	t5=t4+tt;
	t6=t5+tt;
	t7=t6+tt;
	t8=t7+tt;
	t9=t8+tt;
	t10=t9+tt;

	}
	
	ft2=ft;

	

//document.getElementById("mess").innerHTML="t1"+t1+ "<br>h:";

	if(follow){
		dX1=orgX+(sX*t1);
		dY1=orgY-((sY*t1)-(grav/2*t1*t1));
		dX2=orgX+(sX*(t2));
		dY2=orgY-((sY*(t2))-(grav/2*(t2)*(t2)));
		dX3=orgX+(sX*(t3));
		dY3=orgY-((sY*(t3))-(grav/2*(t3)*(t3)));
		dX4=orgX+(sX*(t4));
		dY4=orgY-((sY*(t4))-(grav/2*(t4)*(t4)));
		dX5=orgX+(sX*(t5));
		dY5=orgY-((sY*(t5))-(grav/2*(t5)*(t5)));
		dX6=orgX+(sX*t6);
		dY6=orgY-((sY*(t6)-(grav/2*t6*t6)));
		dX7=orgX+(sX*(t7));
		dY7=orgY-((sY*(t7))-(grav/2*(t7)*(t7)));
		dX8=orgX+(sX*(t8));
		dY8=orgY-((sY*(t8))-(grav/2*(t8)*(t8)));
		dX9=orgX+(sX*(t9));
		dY9=orgY-((sY*(t9))-(grav/2*(t9)*(t9)));
		dX10=orgX+(sX*(t10));
		dY10=orgY-((sY*(t10))-(grav/2*(t10)*(t10)));


		if(dY1>orgY){
			t1=0;
			//tt2=1;
		}

		if(dY2>orgY){
			t2=0;
		}
		if(dY3>orgY){
			t3=0;
		}
		if(dY4>orgY){
			t4=0;
		}
		if(dY5>orgY){
			t5=0;
		}
		if(dY6>orgY){
			t6=0;
		}
		if(dY7>orgY){
			t7=0;
		}
		if(dY8>orgY){
			t8=0;
		}
		if(dY9>orgY){
			t9=0;
		}
		if(dY10>orgY){
			t10=0;
		}


		tt2=0.1;

		t1+=tt2;
		t2+=tt2;
		t3+=tt2;
		t4+=tt2;
		t5+=tt2;
		t6+=tt2;
		t7+=tt2;
		t8+=tt2;
		t9+=tt2;
		t10+=tt2;
		
		c=1;
		c2=0;
		size=time*10+5;

		dX1=orgX+(sX*t1);
			dY1=orgY-((sY*t1)-(grav/2*t1*t1));
			dX2=orgX+(sX*(t2));
			dY2=orgY-((sY*(t2))-(grav/2*(t2)*(t2)));
			dX3=orgX+(sX*(t3));
			dY3=orgY-((sY*(t3))-(grav/2*(t3)*(t3)));
			dX4=orgX+(sX*(t4));
			dY4=orgY-((sY*(t4))-(grav/2*(t4)*(t4)));
			dX5=orgX+(sX*(t5));
			dY5=orgY-((sY*(t5))-(grav/2*(t5)*(t5)));
			dX6=orgX+(sX*t6);
			dY6=orgY-((sY*(t6)-(grav/2*t6*t6)));
			dX7=orgX+(sX*(t7));
			dY7=orgY-((sY*(t7))-(grav/2*(t7)*(t7)));
			dX8=orgX+(sX*(t8));
			dY8=orgY-((sY*(t8))-(grav/2*(t8)*(t8)));
			dX9=orgX+(sX*(t9));
			dY9=orgY-((sY*(t9))-(grav/2*(t9)*(t9)));
			dX10=orgX+(sX*(t10));
			dY10=orgY-((sY*(t10))-(grav/2*(t10)*(t10)));


			g.beginPath();
			g.arc(dX1,dY1,(size-t1)/1,0,2*Math.PI);
			g.stroke();
			g.beginPath();
			g.arc(dX2,dY2,size-t2/c-c2,0,2*Math.PI);
			g.stroke();
			g.beginPath();
			g.arc(dX3,dY3,size-t3/c-c2,0,2*Math.PI);
			g.stroke();
			g.beginPath();
			g.arc(dX4,dY4,size-t4/c-c2,0,2*Math.PI);
			g.stroke();
			g.beginPath();
			g.arc(dX5,dY5,size-t5/c-c2,0,2*Math.PI);
			g.stroke();
			g.beginPath();
			g.arc(dX6,dY6,size-t6/c-c2,0,2*Math.PI);
			g.stroke();
			g.beginPath();
			g.arc(dX7,dY7,size-t7/c-c2,0,2*Math.PI);
			g.stroke();
			g.beginPath();
			g.arc(dX8,dY8,size-t8/c-c2,0,2*Math.PI);
			g.stroke();
			g.beginPath();
			g.arc(dX9,dY9,size-t9/c-c2,0,2*Math.PI);
			g.stroke();
			g.beginPath();
			g.arc(dX10,dY10,size-t10/c-c2,0,2*Math.PI);
			g.stroke();

			/*g.fillText("1",dX1,dY1);
			g.fillText("2",dX2,dY2);
			g.fillText("3",dX3,dY3);
			g.fillText("4",dX4,dY4);
			g.fillText("5",dX5,dY5);
			g.fillText("6",dX6,dY6);
			g.fillText("7",dX7,dY7);
			g.fillText("8",dX8,dY8);
			g.fillText("9",dX9,dY9);
			g.fillText("10",dX10,dY10);*/

			document.getElementById("mess").innerHTML="t:"+time+"<br>time:"+time*5+"<br>size:"+size+"<br>b:"+b+"<br>h:"+h;

	}
	/*if(phek){
	ballDeg+=5;

	g.save();
	g.translate(posX-r,posY-r);
	g.rotate(ballDeg*3.14/180);
	g.drawImage(ballImg,0-r,0-r);
	g.restore();
	}
	else{
		g.drawImage(ballImg,(posX-(r/1)),(posY-(r/1)));
	}*/

	//g.strokeRect(this.mouseX,this.mouseY,50,50,paint);

	//i+=1;

	//setTimeout(paint,10);

}


function circle(){
	
}


function mDown(e){

	//if();
	mouseX = e.pageX-can.offsetLeft;
    mouseY = e.pageY-can.offsetLeft;
    if(mouseX>(orgX-10)&&mouseX<(orgX+10)&&mouseY>(orgY-10)&&mouseY<(orgY+10)){
    	follow=true;
    	tt2=0;
    }


//paint();
}



function touchStart(e){

	//if();
	
	e.preventDefault();

	//saveImage();

	mouseX = e.targetTouches[0].pageX-can.offsetLeft;
	mouseY = e.targetTouches[0].pageY-can.offsetLeft;


    if(mouseX>(orgX-10)&&mouseX<(orgX+10)&&mouseY>(orgY-10)&&mouseY<(orgY+10)){
    	follow=true;
    	tt2=0;
    }


//paint();
}




function mUp(e){

	//if();
	mouseX = e.pageX-can.offsetLeft;
    mouseY = e.pageY-can.offsetLeft;

    if(follow){
    	b=orgX-posX;
    	h= Math.sqrt((orgX-posX)*(orgX-posX) + (orgY-posY)*(orgY-posY));
    	s=h/2;
    	cos = b/h;
    	deg2 =90-( Math.asin(cos)*(180/3.14) );
    	deg = Math.acos(cos);
    	deg=3.14/180*deg2;
    	restore();
    	sX=s*Math.cos(deg);
    	sY=s*Math.sin(deg);
    	phek=true;
    	document.getElementById("mess").innerHTML="base:"+b+ "<br>h:"+h+"<br>deg:"+deg+"<br>deg2:"+deg2+"<br>sX:"+sX+"<br>sY:"+sY;
    }
    follow=false;
    tt2=0;

//paint();
}


function touchEnd(e){

	e.preventDefault();

	mouseX = e.targetTouches[0].pageX-can.offsetLeft;
	mouseY = e.targetTouches[0].pageY-can.offsetLeft;

	if(follow){
    	b=orgX-posX;
    	h= Math.sqrt((orgX-posX)*(orgX-posX) + (orgY-posY)*(orgY-posY));
    	s=h/2;
    	cos = b/h;
    	deg2 =90-( Math.asin(cos)*(180/3.14) );
    	deg = Math.acos(cos);
    	deg=3.14/180*deg2;
    	restore();
    	sX=s*Math.cos(deg);
    	sY=s*Math.sin(deg);
    	phek=true;
    	document.getElementById("mess").innerHTML="base:"+b+ "<br>h:"+h+"<br>deg:"+deg+"<br>deg2:"+deg2+"<br>sX:"+sX+"<br>sY:"+sY;
    }
    follow=false;
    tt2=0;

}





function restore(){
	posX=orgX;
	posY=orgY;
}

function mMove(e)
{
    // mouseX, mouseY;

    
        mouseX = e.pageX-can.offsetLeft;
        mouseY = e.pageY-can.offsetLeft;

        if(follow){
        	posX=mouseX;
        	posY=mouseY;
        }
        if(follow){
    	b=orgX-posX;
    	h= Math.sqrt((orgX-posX)*(orgX-posX) + (orgY-posY)*(orgY-posY));
    	s=h/2;
    	cos = b/h;
    	deg2 =90-( Math.asin(cos)*(180/3.14) );
    	deg = Math.acos(cos);
    	deg=3.14/180*deg2;
    	sX=s*Math.cos(deg);
    	sY=s*Math.sin(deg);
    }
}


function touchMove(e)
{
    // mouseX, mouseY;

    
        e.preventDefault();
	
	mouseX = e.targetTouches[0].pageX-can.offsetLeft;
	mouseY = e.targetTouches[0].pageY-can.offsetLeft;

        if(follow){
        	posX=mouseX;
        	posY=mouseY;
        }
        if(follow){
    	b=orgX-posX;
    	h= Math.sqrt((orgX-posX)*(orgX-posX) + (orgY-posY)*(orgY-posY));
    	s=h/2;
    	cos = b/h;
    	deg2 =90-( Math.asin(cos)*(180/3.14) );
    	deg = Math.acos(cos);
    	deg=3.14/180*deg2;
    	sX=s*Math.cos(deg);
    	sY=s*Math.sin(deg);
    }
}

















