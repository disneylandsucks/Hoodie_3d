
const canvasWidth = window.innerWidth
const canvasHeight = window.innerHeight
let img, img2, mod, shirt
let wg, bg, fg, money,venmo
let imgs = [], imageCounter = 0
let theta = 0
let thetaInc = 0.01
let rotating = false
let clicked = false

function preload(){
    // audio = createAudio("Katy Perry - Firework (Acoustic Session) REMASTERED.mp3");
    audio = createAudio("50 Cent - Candy Shop (Lyrics) ft. Olivia [TubeRipper.com].mp3");

imgs[0]= loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687116396/Hoodie_Trial3_ykne82.png')
 imgs[1] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687121745/Hoodie_Trial4_ly34d7.png')  
    imgs[2]= loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687125980/Hoodie_Trial5_fhaq8a.png')
     imgs[3] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687126713/Hoodie_Trial6_w1bgpm.png') 
  imgs[4]= loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687128207/hoodie_trial7_vhhzmz.png')
  imgs[5]= loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687129676/hoodie_trial8_qykg0s.png')
  imgs[6] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687389331/Hoodie_Trial6_tgqkkz.png')
    imgs[7] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687389824/Hoodie_Trial7_koxmwj.png')    
  imgs[8] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687390557/Hoodie_Trial8_hpjcef.png')
    imgs[9] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687391454/Hoodie_Trial9_pgktbd.png')
      imgs[10] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687392265/Hoodie_Trial10_n9rle1.png')
        imgs[11] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687393519/Hoodie_Trial12_v4xqqc.png')
        imgs[12] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687394120/Hoodie_Trial13_odnxf5.png')
  imgs[13] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687392880/Hoodie_Trial11_h8o1zr.png')
  imgs[14] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687395012/Hoodie_Trial14_b1poct.png')  
      imgs[15] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687395488/Hoodie_Trial15_nccaqw.png')  
    imgs[16] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687467375/Hoodie_Trial17_r50fep.png')
      imgs[17] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687467376/Hoodie_Trial16_h7vlx0.png')

    
         imgs[18] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687467996/Hoodie_Trial18_ojn2pm.png')

        imgs[19] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687468620/Hoodie_Trial19_dbnlic.png')

      imgs[20] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687469139/Hoodie_Trial20_jwfdkf.png')
    

             imgs[21] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687469760/Hoodie_Trial21_ehjrzo.png')

  
  


                 imgs[22] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687470356/Hoodie_Trial22_cwtivc.png')
    
    imgs[23] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687471536/Hoodie_Trial23_vsbutu.png')
    
        imgs[24] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687472443/Hoodie_Trial24_fb7yp6.png')

        imgs[25] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687472966/Hoodie_Trial25_a3z06e.png')
    
            imgs[26] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687473671/Hoodie_Trial26_b0pn0g.png')


              imgs[27] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687480432/Hoodie_Trial27_n36bko.png')
    
                imgs[28] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687480433/Hoodie_Trial28_otr6ff.png')
    
              imgs[29] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687482191/Hoodie_Trial32_hcozbf.png')
    
              imgs[30] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687481374/Hoodie_Trial29_a33wjq.png')

                  imgs[31] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687481804/Hoodie_Trial31_k0zqq2.png')


                  imgs[32] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687480837/Hoodie_Trial29_mpkzhh.png')


                  imgs[33] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687482973/Hoodie_Trial33_d8sk3y.png')


                  imgs[34] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687483479/Hoodie_Trial34_aklmyd.png')

                  imgs[35] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687484123/Hoodie_Trial35_gy77hy.png')

                  imgs[36] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687489845/Hoodie_Trial36_xww8ob.png')

                  imgs[37] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687490268/Hoodie_Trial37_xwzgcs.png')

                  imgs[38] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687979500/Hoodie_Trial_IDK1_yaxmdl.png')
                  imgs[39] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687979500/Hoodie_Trial_IDK2_qzkgpw.png')
                  imgs[40] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687979500/Hoodie_Trial_IDK3_jjquz7.png')
    
                  imgs[41] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1706473689/HOODIETIME1_dqybqx.png')
    
                  imgs[42] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1706473689/HOODIETIME3_i7itvn.png')
    
                  imgs[43] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1706473689/HOODIETIME2_jszziz.png') 
    
                  // imgs[44] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687979500/Hoodie_Trial_IDK3_jjquz7.png')
    
                  // imgs[45] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687979500/Hoodie_Trial_IDK3_jjquz7.png') 
    
                  // imgs[46] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687979500/Hoodie_Trial_IDK3_jjquz7.png')
    
                  // imgs[47] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687979500/Hoodie_Trial_IDK3_jjquz7.png') 
    
                  // imgs[48] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687979500/Hoodie_Trial_IDK3_jjquz7.png') 
    
                  // imgs[49] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687979500/Hoodie_Trial_IDK3_jjquz7.png') 
    
                  // imgs[50] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687979500/Hoodie_Trial_IDK3_jjquz7.png')
    
  mod = loadModel('uploads_files_3448446_Hoodie_MD.obj')
}


function setup() {
  createCanvas(canvasWidth, canvasHeight, WEBGL);
  angleMode(DEGREES)
  shirt = new Shirt(imgs[0], mod, -100, -100, 0, theta)
    wg = loadImage ('https://res.cloudinary.com/painkillerkid/image/upload/v1687124291/wordstuff2_Yellow_umqu6z.png');
  
  fg = loadImage ('https://res.cloudinary.com/painkillerkid/image/upload/v1687124345/image-asset_n3wnoz.gif')
  
  bg = loadImage ('https://media.tenor.com/UsUGaFkCTeUAAAAC/kanye-west-black-skinhead.gif')
 
    money = loadImage ('https://res.cloudinary.com/painkillerkid/image/upload/v1669858524/sendmemoney_schfml.png')
  
      venmo = loadImage ('https://res.cloudinary.com/painkillerkid/image/upload/v1669857644/MYVENMO_bkfuco.jpg')
}

function draw() {
  background('rgb(0,0,0)'); 
  
    push();
  noStroke();
translate(30, 20, -3000);
  texture(bg);
  plane(5000, 5000);
  pop();  
  
//   push();
//   noStroke()
//   button = createButton('');
//   if(rotating){
//     button.addClass('unrotate-button')
//     button.html('stop rotation')
//   }else{
//     button.addClass('rotate-button');
//     button.html('rotate shirt')    
//   }
 
//   button.position(1300, 650);
//   button.mousePressed(setRotate);
//   pop();
  
    push();
  noStroke();
translate(1300, -150, -1000);
  texture(money);
  plane(500, 500);
  pop(); 
  
      push();
  noStroke();
translate(1300, -650, -1000);
  texture(venmo);
  plane(500, 500);
  pop(); 
  
  push();
  noStroke();
translate(-1130, -200, -1000);
  texture(fg);
  plane(1000, 1000);
  pop(); 
  
    push();
  noStroke();
translate(-1130, -200, -1000);
  texture(wg);
  plane(1000, 1000);
  pop(); 
  audio.autoplay(true);
  audio.loop(true);
  //console.log(theta)
  shirt.update(mouseX, mouseY, theta)
  
 
  shirt.render()
  if(theta > 2 || theta < -2){
    thetaInc*=-1
  }
  theta+=thetaInc

}

function setRotate(){
  rotating = !rotating
  shirt.toggleRotate()
}

function changeBG() {
  let val = random(255);
  background(val);
}
function mousePressed(){

   shirt.drag(mouseX, mouseY)
   clicked = true

}

function mouseReleased(){

   shirt.dragging = false
   clicked = false

}




  // old

// function mousePressed(){ 
  // if mouse is in right box
    // then: do the image increment thing
  //else if mouse is in left box
    // do the image decrement thing
  // else

  // imageCounter = floor(random(imgs.length))

//     shirt.changeShirt(imgs[imageCounter])

//}

function keyPressed(){
  if(keyCode === RIGHT_ARROW){
    if(imageCounter < imgs.length -1){
      imageCounter++
    }else{
      imageCounter = 0
    }
  }
    if(keyCode === LEFT_ARROW){
      if(imageCounter > 0){
         imageCounter--
      } else {
        imageCounter = imgs.length - 1
      }

  }
 // console.log(imageCounter)
  shirt.changeShirt(imgs[imageCounter])
}

