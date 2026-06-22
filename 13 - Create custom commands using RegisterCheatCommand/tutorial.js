import {Instance} from 'cs_script/point_script'

Instance.RegisterCheatCommand("tp",(args)=>{
    let _args = args.trimEnd().split("\""); // ["", "Mii Fanboy", " 129 9 120"]
    let pName = _args[1];
    let _pos = _args[2].split(" ").filter(Boolean); // "",0,undefined
    let pos = {x: parseInt(_pos[0]), y: parseInt(_pos[1]), z: parseInt(_pos[2])};
    //Instance.Msg(pName);

    // Implementation of teleport (not included in the video)
    let isTeleported = false;
    const allPlayers = Instance.GetAllPlayerControllers();
    for(const player of allPlayers){
        if(player.GetPlayerName() == pName){
            const pawn = player.GetPlayerPawn();
            if(pawn && pawn.IsValid() && pawn.IsAlive()){
                pawn.Teleport({position: pos});
                isTeleported = true;
            }
        }
    }
    if(isTeleported)Instance.Msg(`Teleported ${pName}.`)
    else Instance.Msg("Teleport failed: Player not found.")
});
