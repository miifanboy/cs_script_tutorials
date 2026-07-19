import {CSInputs, Instance} from 'cs_script/point_script'


Instance.SetThink(()=>{
    const player = Instance.GetPlayerController(0);
    const pawn = player?.GetPlayerPawn();
    const isJump = pawn?.WasInputJustReleased(CSInputs.JUMP);
    if(isJump){
        Instance.DebugScreenText({text: isJump,x: 100,y:10,duration: 1 ,color: {r:255,g:0, b:0}}) 
    }
    
Instance.SetNextThink(Instance.GetGameTime() + 0.01);
})
Instance.SetNextThink(Instance.GetGameTime() + 0.01);
