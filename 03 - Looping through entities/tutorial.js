import { Instance } from "cs_script/point_script";

const weapon_names = [
"weapon_awp",
"weapon_ak47",
"weapon_deagle"
]
function getNumber(a)
{
	return Math.floor(Math.random() * a) // 0 to 3 [0,1,2]
}
Instance.SetThink(() => {
	Instance.DebugScreenText("",10,10,0.01,{r: 255, g: 0, b: 0});
	
	// var player_controller = Instance.GetPlayerController(0);
	// var player_pawn = player_controller.GetPlayerPawn();
	// var active_weapon = player_pawn.GetActiveWeapon().GetData();
	//Instance.DebugScreenText(active_weapon.GetName(),40,10,0.01,{r: 255, g: 0, b: 0});
	
	var entlist = Instance.FindEntitiesByClass("player");
	var entlen = entlist.length;
	//Instance.DebugScreenText(entlen,10,10,0.01,{r: 255, g: 0, b: 0});
	for(var i = 1;i<entlen; i++)
	{
		var player_controller = Instance.GetPlayerController(i);
		var player_pawn = player_controller.GetPlayerPawn();
		var randomweapon = weapon_names[getNumber(3)];
		player_pawn.GiveNamedItem(randomweapon,true);
	}
	
	Instance.SetNextThink(Instance.GetGameTime());
})
Instance.SetNextThink(Instance.GetGameTime());
