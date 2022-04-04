var historialInversiones=[]
var tasa= 27

$(document).ready(function(){

    $("#calcular").click(function(){
        var capital= parseInt( $("#inputCapital").val() )
        var plazo= parseInt($("#inputPlazo").val() )    



        if (isNaN(capital)===true|| capital<1000){

            $('#inputCapital').css({border: "1px solid red"})
            $('.errorCapital').css({border: "1px solid red", background:"white", color: "red"})
            return false
        }
        else{
            $('#inputCapital').css({border: "none"})
            $('.errorCapital').css({border: "none", background:"#D9593D", color: "black"})
            

            if(isNaN(plazo)||(plazo<30) || (plazo>365)){

                $('#inputPlazo').css({border: "1px solid red"})         
                $('.errorPlazo').css({border: "1px solid red", background:"white", color: "red"})
                return false
            }
            else{
                $('#inputPlazo').css({border: "none"})         
                $('.errorPlazo').css({border: "none", background:"#D9593D)", color: "black"})

                var formularioPrincipal=document.getElementById("formularioPrincipal");
                formularioPrincipal.addEventListener("submit", validarFormulario);
                function validarFormulario(e){
                    e.preventDefault();
                }

                var interes= parseFloat(((capital*(tasa/100)/365)* plazo).toFixed(2))
                var montoFinal= capital+ interes

                console.log("Intereses ganados: $" + interes+ "\nMonto final: $" + (capital+interes))



// tabla de resultados
                $("#formularioPrincipal").append( `
                
                    <div class="resultado" id="tabla" style="display:none;">
                        <table>
                            <tr>
                                <td> Capital </td>
                                <td>
                                    $${capital}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Plazo
                                </td>
                                <td>
                                    ${plazo}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Intereses ganados
                                </td>
                                <td>
                                    $${interes}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Monto total
                                </td>
                                <td>
                                    $${montoFinal}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    TNA
                                </td>
                                <td>
                                    ${tasa}%
                                </td>
                            </tr>
                        </table>
                        <button class="regresar">Regresar</button>
                    </div>
                `)

                $('.contenido').fadeOut("slow", function(){
                    $('.resultado').fadeIn(2000)
                
                    $('#formularioPrincipal').css({backgroundImage:"url(https://miro.medium.com/max/888/1*YGCqKYYjb1wJgeqXx-2mjA.gif)"}).fadeIn(1000)
                })
                
                $('.regresar').on("click", function(){
                
                    $('.resultado').fadeOut("slow",function(){
                        $('.resultado').remove()
                        $('.contenido').fadeIn(2000)
                        $('#formularioPrincipal').css({backgroundImage:"none"}).delay(1000) 
                    })

                })

                // Enter
                $("body").keypress(function(event){
                    var keycode = (event.keyCode ? event.keyCode : event.which);
                    if(keycode == '13'){
                        $(".regresar").trigger('click')   
                    }
                });

                // ClickMe
                const buttonEl = document.querySelector('#clickMe');
                    buttonEl.addEventListener('click', runAJAX);

                    function runAJAX() {
                        alert("Que tengas un buen día");
                    }

                // darkMode
                var checkbox = document.querySelector('input[name=theme]');

checkbox.addEventListener('change', function() {
    if(this.checked) {
        trans()
        document.documentElement.setAttribute('data-theme', 'light')
        window.localStorage.setItem('data-theme', 'light');
    } else {
        trans()
        document.documentElement.setAttribute('data-theme', 'dark')
        window.localStorage.setItem('data-theme', 'dark');
        }
    })

    let trans = () => {
        document.documentElement.classList.add('transition');
        window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
}

//Script for storing state in local storage

const toggleSwitch = document.getElementById('switch');
const currentTheme = localStorage.getItem('data-theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}  

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('data-theme', 'dark');  
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('data-theme', 'light'); 
    }
} 

toggleSwitch.addEventListener('change', switchTheme, false);


                // storage
                function agregarHistorial(capital,plazo,tasa,interes,montoFinal){
                    const datos= {capital, plazo, tasa, interes, montoFinal}
                    historialInversiones.push(datos);
                }    
                agregarHistorial(capital,plazo,tasa,interes,montoFinal)
                
                
                const historialInversionesJson= JSON.stringify(historialInversiones)
                sessionStorage.setItem('Calculos de inversiones', historialInversionesJson)     
                
                function enviarDatosApi() {
                    let Inversiones = {
                        "userId": 1,
                        "id": 101,
                        "title": "Inversiones",
                        "body": historialInversiones
                    }
                
                    $.post("https://jsonplaceholder.typicode.com/posts", Inversiones).done(function(respuesta, estado) {
                        console.log("Estado: " + estado);
                        console.log("Datos de la API: " + JSON.stringify(respuesta));
                        console.log(respuesta);
                    });
                }
                
                enviarDatosApi();
            }
        }
    })
})

// newLibrary

var colors = new Array(
    [62,35,255],
    [60,255,60],
    [255,35,98],
    [45,175,230],
    [255,0,255],
    [255,128,0]);

var step = 0;

var colorIndices = [0,1,2,3];

// transition
var gradientSpeed = 0.002;

function updateGradient()
{
    
    if ( $===undefined ) return;
    
var c0_0 = colors[colorIndices[0]];
var c0_1 = colors[colorIndices[1]];
var c1_0 = colors[colorIndices[2]];
var c1_1 = colors[colorIndices[3]];

var istep = 1 - step;
  var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
  var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
  var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
var color1 = "rgb("+r1+","+g1+","+b1+")";

  var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
  var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
  var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
var color2 = "rgb("+r2+","+g2+","+b2+")";

$('#gradient').css({
    background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
    background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
    
    step += gradientSpeed;
    if ( step >= 1 )
    {
        step %= 1;
        colorIndices[0] = colorIndices[1];
        colorIndices[2] = colorIndices[3];

      colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
      colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    }
}
setInterval(updateGradient,10);

// fetch

const from_currencyEl = document.getElementById('from_currency');
const from_ammountEl = document.getElementById('from_ammount');
const to_currencyEl = document.getElementById('to_currency');
const to_ammountEl = document.getElementById('to_ammount');
const rateEl = document.getElementById('rate');
const exchange = document.getElementById('exchange');

from_currencyEl.addEventListener('change', calculate);
from_ammountEl.addEventListener('input', calculate);
to_currencyEl.addEventListener('change', calculate);
to_ammountEl.addEventListener('input', calculate);

exchange.addEventListener('click', () => {
	const temp = from_currencyEl.value;
	from_currencyEl.value = to_currencyEl.value;
	to_currencyEl.value = temp;
	calculate();
});

function calculate() {
	const from_currency = from_currencyEl.value;
	const to_currency = to_currencyEl.value;
	
	fetch(`https://api.exchangerate-api.com/v4/latest/${from_currency}`)
		.then(res => res.json())
		.then(res => {
		const rate = res.rates[to_currency];
		rateEl.innerText = `1 ${from_currency} = ${rate} ${to_currency}`
		to_ammountEl.value = (from_ammountEl.value * rate).toFixed(2);
	})
}

calculate();

