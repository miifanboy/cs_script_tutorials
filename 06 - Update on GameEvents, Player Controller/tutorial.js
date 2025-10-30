import { Instance } from "cs_script/point_script";


Instance.OnGunFire((weapon)=>{
	
	
	var owner_pwn = weapon.GetOwner();
	var og_controller = owner_pwn.GetOriginalPlayerController();
	var plr_name = og_controller.GetPlayerName();


	Instance.DebugScreenText(plr_name,10,10,1,{r: 255,g: 0, b:0});
	
})
