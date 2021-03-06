class clsAsteroidsGame {
    constructor(pWin, pDoc) {
        console.log('__clsAsteroirdGame_______________');
        this.Doc = pDoc;
        this.win = pWin;
        this.roza=-0.03;
        this.maxvelo=2;
        //this.pretime=0;
        this.canvas=this.Doc.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');


        this.rocks=[];
        this.rocknum=15; // configuración
        // ereasethis.rock= new clsRock(this.ctx)
        //this.imageNAVE = new clsImage('imgs/spaceship.png', this.ctx, 1);
        this.imageBACKG0;
        this.imageBACKG1;
        this.imageBACKG2;
        this.CreateBackground();

        this.m_spaceShip=  new clsSpaceShip(this.ctx);//new clsSprite(this.ctx,"imgs/spaceship/",1, '.png');
        //this.m_spaceShip.sprite.ignoreimagerotation=1;
        
        this.INTERACT= new clsInteract(this);
   
        this.CreateSprites();
        this.CreateEvents();
        this._loop();
    }

    //////////////////////////////////////////////////////////////////////////

    CreateEvents(){
        this.Doc.addEventListener('__KEYPRESS_CUSTOM', this._InteractionCallBack.bind(this));

    }
/////////////////////////////////////////////////////////////////////////////
    CreateBackground(){
        this.imageBACKG0 = new clsImage('imgs/background/frame_1.png', this.ctx, 1,null,null,1.3);
        this.imageBACKG1 = new clsBackground(this.ctx,'' );
        this.imageBACKG2= new clsBackground(this.ctx,'' );
    }
    ////////////////////////////////////////////////////////////////////////////
    CreateSprites(){
        for (var i=0;i<this.rocknum;i++){
            var tR= new clsRock(this.ctx,'b'+i );
            this.rocks.push(tR);
        }

    }
    ////////////////////////////////////////////////////////////////////////////
   
    ////////////////////////////////////////////////////////////////////////////
    _InteractionCallBack(e){
        console.log('_InteractionCallBack=  ' + e.keyCode);

        if (e.keyCode==119){ //
            ///this.m_spaceShip.sprite.flw._rotation=3.1415;
            this.m_spaceShip.sprite.flw.increaseVelocity();
        }
        if (e.keyCode==120){
             this.m_spaceShip.sprite.flw.decreaseVelocity();
        }
        if (e.keyCode==97){
            console.log("rotateeleffff");
            this.m_spaceShip.sprite.flw.rotateLeft();
        }
        if (e.keyCode==100){
            this.m_spaceShip.sprite.flw.rotateRight();
        }

        if (e.keyCode==115 || e.keyCode==32){
            this.m_spaceShip.Fire();
        }

        if (e.keyCode==122){
            this.m_spaceShip.sprite.flw.DisplaceLeft();;
        }
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////
    _DrawCanvasRect(){
        this.ctx.beginPath();
        this.ctx.lineWidth = "4";
        this.ctx.strokeStyle = "green";
        this.ctx.rect(0, 0, 800, 600);
        this.ctx.stroke();
    }

    ////////////////////////////////////////////////////////////////////////////
    _loop() {

        this._CheckHits()
        //this.ctx.clearRect(0,0,800,600);
        this.imageBACKG0.Draw();
        this.imageBACKG1.Draw();
        this.imageBACKG2.Draw();
        for (var i=0;i<this.rocknum;i++){
            this.rocks[i].Draw();
        }
        this.m_spaceShip.Draw();
        this._DrawCanvasRect();

        window.requestAnimationFrame(this._loop.bind(this));
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////

   _CheckHits(){
        this.m_spaceShip.sprite.GoToAndStop(1);
        for (var i=0;i<this.rocknum;i++){
            if (this.m_spaceShip.sprite.Collide (this.rocks[i].sprite)){
                console.log('Colission')
                this.m_spaceShip.HasACollision()
            };
        };


        if (this.m_spaceShip.fire==undefined) return;
        for (var i=0;i<this.rocknum;i++){
            if (this.m_spaceShip.fire.Collide (this.rocks[i].sprite)){
                console.log('Colission misil')
                //this.m_spaceShip.HasACollision()
                this.rocks[i].sprite.GoToAndStop(2);
            };
        };/**/
   }


    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////

}