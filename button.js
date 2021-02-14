var arr=[1,2,3,6,9,8,7,4];
const ids=[1,2,3,6,9,8,7,4]
function clockwise()
{
    arr.unshift(arr.pop())
   for(let i=0;i<=7;i++)
   {
       document.getElementById("btn"+ids[i]).innerHTML=arr[i];

   }
     
}
