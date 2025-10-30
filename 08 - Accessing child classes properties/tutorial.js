import { Instance, CSPlayerPawn } from "cs_script/point_script";


Instance.OnGunFire((event) => {
	var prt = event.weapon.GetParent();
	if(prt instanceof CSPlayerPawn)
	{
		var name = prt.GetPlayerController().GetPlayerName();
		Instance.DebugScreenText(name,10,10,1,{r:255,g: 0, b: 0});
	}
	
})


Instance.SetThink(()=>{
	
	Instance.SetNextThink(Instance.GetGameTime());
})

Instance.SetNextThink(Instance.GetGameTime());
