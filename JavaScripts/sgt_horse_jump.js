let c_array = [];                          // eksterni array koji pamti id-jeve svih match-anih slova


function horseJump(r_num, i, j)                                                    // r_num postaviti na 0
{
var s_len = document.getElementById("s_length").value;
var t_wdt = document.getElementById("t_width").value;
var t_hgt = document.getElementById("t_height").value;

var w_input = document.getElementById("basic_word").value;
var w_len = w_input.length;

var k=0;
var l=0;

if (r_num<=w_len && i<t_hgt && j<t_wdt)
{
var identifier = i + "letter" + j; 
var letter_ellem = i + "letelem" + j; 

var c_char = document.getElementById(identifier).value;

if (c_char==w_input[r_num])
{
c_array[r_num] = letter_ellem;

r_num++;
///////////////////////////////////////////////////////////////////////////////////////// FORWARD DOWN
if (i<t_hgt-2 && j<t_wdt-1 && i>=0 && j>=0)
{
k = i+2;
l = j+1;
 
if ((k*t_wdt + l)<s_len)
{
horseJump(r_num, k , l);
}
if (r_num==w_len)
{
for(var k=0; k<c_array.length; k++)
{
document.getElementById(c_array[k]).style.color = "#00ff00";
}
//c_array = [];
r_num = 0;
return null;
}
}
//////////////////////////////////////////////////////////////////////////////////////// FORWARD UP
if (i>1 && j<t_wdt-1 && i<t_hgt && j>=0)
{
k = i-2;
l = j+1;

if ((k*t_wdt + l)<s_len)
{
horseJump(r_num, k , l);
}
if (r_num==w_len)
{
for(var k=0; k<c_array.length; k++)
{
document.getElementById(c_array[k]).style.color = "#00ff00";
}
//c_array = [];
r_num = 0;
return null;
}
}
//////////////////////////////////////////////////////////////////////////////////////// BACKWARD UP
if (i>1 && j>0 && i<t_hgt && j<t_wdt)
{
k = i-2;
l = j-1;

if ((k*t_wdt + l)<s_len)
{
horseJump(r_num, k, l);
}
if (r_num==w_len)
{
for(var k=0; k<c_array.length; k++)
{
document.getElementById(c_array[k]).style.color = "#00ff00";
}
//c_array = [];
r_num = 0;
return null;
}
}
//////////////////////////////////////////////////////////////////////////////////////// BACKWARD DOWN
if (i<t_hgt-2 && j>1 && i>=0 && j<t_wdt)
{
k = i+2;
l = j-1;

if ((k*t_wdt + l)<s_len)
{
horseJump(r_num, k , l);
}
if (r_num==w_len)
{
for(var k=0; k<c_array.length; k++)
{
document.getElementById(c_array[k]).style.color = "#00ff00";
}
//c_array = [];
r_num = 0;
return null;
}
}
////////////////////////////////////////////////////////////////////////////////////////RIGHT DOWN
if (i<t_hgt-1 && j>=0 && i>=0 && j<t_wdt-2)
{
k = i+1;
l = j+2;

if ((k*t_wdt + l)<s_len)
{
horseJump(r_num, k , l);
}
if (r_num==w_len)
{
for(var k=0; k<c_array.length; k++)
{
document.getElementById(c_array[k]).style.color = "#00ff00";
}
//c_array = [];
r_num = 0;
return null;
}
}
////////////////////////////////////////////////////////////////////////////////////////LEFT DOWN
if (i<t_hgt-1 && j>1 && i>=0 && j<t_wdt)
{
k = i+1;
l = j-2;

if ((k*t_wdt + l)<s_len)
{
horseJump(r_num, k , l);
}
if (r_num==w_len)
{
for(var k=0; k<c_array.length; k++)
{
document.getElementById(c_array[k]).style.color = "#00ff00";
}
//c_array = [];
r_num = 0;
return null;
}
}
////////////////////////////////////////////////////////////////////////////////////////RIGHT UP
if (i<t_hgt && j>=0 && i>0 && j<t_wdt-2)
{
k = i-1;
l = j+2;

if ((k*t_wdt + l)<s_len)
{
horseJump(r_num, k , l);
}
if (r_num==w_len)
{
for(var k=0; k<c_array.length; k++)
{
document.getElementById(c_array[k]).style.color = "#00ff00";
}
//c_array = [];
r_num = 0;
return null;
}
}
////////////////////////////////////////////////////////////////////////////////////////LEFT UP
if (i<t_hgt && j>1 && i>0 && j<t_wdt)
{
k = i-1;
l = j-2;

if ((k*t_wdt + l)<s_len)
{
horseJump(r_num, k , l);
}
if (r_num==w_len)
{
for(var k=0; k<c_array.length; k++)
{
document.getElementById(c_array[k]).style.color = "#00ff00";
}
//c_array = [];
r_num = 0;
return null;
}
}
////////////////////////////////////////////////////////////////////////////////////////

}
}

}



function walker()
{
var s_len = document.getElementById("s_length").value;
var t_wdt = document.getElementById("t_width").value;
var t_hgt = document.getElementById("t_height").value;

for (var i=0; i<t_hgt; i++)
{
for (var j=0; j<t_wdt; j++)
{
horseJump(0, i, j);
}
}
}
