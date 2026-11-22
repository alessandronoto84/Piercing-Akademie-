import { chromium } from '/opt/node-tools/node_modules/playwright/index.mjs';
import fs from 'fs';
const [S,id,schritte]=process.argv.slice(2); const b=await chromium.launch();
const dir=S+'/video/roh-'+id; fs.rmSync(dir,{recursive:true,force:true});
const ctx=await b.newContext({viewport:{width:1280,height:720},recordVideo:{dir,size:{width:1280,height:720}}});
const p=await ctx.newPage(); await p.goto('file://'+S+'/video/clip.html?id='+id); await p.waitForTimeout(800);
await p.evaluate(()=>window.starten()); await p.waitForTimeout(2600+4600*(+schritte)+3500);
await ctx.close(); await b.close();
