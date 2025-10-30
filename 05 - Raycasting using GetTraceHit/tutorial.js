import { Instance } from "cs_script/point_script";

function getLookVector(ang)
{
	var pitch = ang.pitch * Math.PI / 180;
	var yaw = ang.yaw * Math.PI / 180;
	
	var x = Math.cos(pitch) * Math.cos(yaw);
	var y = Math.cos(pitch)* Math.sin(yaw);
	var z = -Math.sin(pitch);
	
	return {x: x, y: y, z: z}
}
Instance.SetThink(() => {
	
	var plr_ctrl = Instance.GetPlayerController(0);
	var plr_pwn = plr_ctrl.GetPlayerPawn();
	
	var eye_ang = plr_pwn.GetEyeAngles();
	var start = plr_pwn.GetEyePosition();
	var dirVec = getLookVector(eye_ang);
	
	var end = {x: start.x + dirVec.x*2000, y: start.y + dirVec.y*2000,z: start.z + dirVec.z*2000}
	
	var hitres = Instance.GetTraceHit(start,end);
	if(hitres.didHit)
	{
		Instance.DebugScreenText(hitres.hitEnt.GetClassName(),10, 10, 0.01, { r: 255, g: 0, b: 0 });
	}
	//Instance.DebugScreenText(`x: ${dirVec.x} y: ${dirVec.y} z: ${dirVec.z}`,10, 10, 0.01, { r: 255, g: 0, b: 0 });
	Instance.SetNextThink(Instance.GetGameTime());
})
Instance.SetNextThink(Instance.GetGameTime());
