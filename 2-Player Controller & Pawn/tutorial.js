import { Instance } from "cs_script/point_script";

Instance.SetThink(() => {
  Instance.DebugScreenText("",10,10,0.01,{r: 255, g:0, b:0 })
  
  var player_controller = Instance.GetPlayerController(0);
  var player_pawn = player_controller.GetPlayerPawn();
  var active_weapon = player_pawn.GetActiveWeapon().GetData();
  Instance.DebugScreenText(active_weapon.GetName(),40,10,0.01,{r: 255, g:0, b:0 })
  
  Instance.SetNextThink(Instance.GetGameTime());
})
Instance.SetNextThink(Instance.GetGameTime());
