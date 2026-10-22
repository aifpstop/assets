var currentHost = window.location.hostname;
 
var defaultApiBase = "https://api.aifps.top";
 
if (currentHost === 'cn.aifps.top') {
    defaultApiBase = "https://apispeed.aifps.top";
} 
window.webconfig =
{
    "baseURL": defaultApiBase,
    "timeout": 5000,
    "learnURL": "https://space.bilibili.com/3706982515083678",
    "withCredentials": true
}