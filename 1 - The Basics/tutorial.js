import { Instance } from "cs_script/point_script";

Instance.SetThink(() => {
  Instance.DebugScreenText("test",10,10,0.01,{r: 255, g:0, b:0 })

  Instance.SetNextThink(Instance.GetGameTime());
})
Instance.SetNextThink(Instance.GetGameTime());
