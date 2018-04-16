window.onload = function(){

	function Calculator()
	{
		this.memoria = '';
		this.temporal_uno = 0;
		this.temporal_dos = 0;
		this.operador = '';
		this.operators = ['+', '-', '*', '/', '=', 'CE'];

		this.limpiar = function()
		{
			this.memoria = '';
		}

		this.calcular = function()
		{
			switch(this.operador)
			{
				case '+': return this.temporal_uno + this.temporal_dos;
				break;
				case '-': return this.temporal_uno - this.temporal_dos;
				break;
				case '*': return this.temporal_uno * this.temporal_dos;
				break;
				case '/': return this.temporal_uno / this.temporal_dos;
				break;
			}
		}

		this.guardar_numero_uno = function()
		{
			this.temporal_uno = parseInt(this.memoria);
		}

		this.guardar_numero_dos = function()
		{
			this.temporal_dos = parseInt(this.memoria);
		}
	}

	var Calcu = new Calculator();
	//document.getElementById('input').innerHTML = Calcu.memoria;

	$(function(){
		$('.digit').on('click', function(){

			if(Calcu.memoria.length < 5)
			{
				var digito = $(this).text();
				Calcu.memoria += digito;

				$('.form-control').val( Calcu.memoria );
			}

		});

		$('.operator').on('click', function(){

			if(Calcu.memoria.length == 0) return false;

			switch($(this).text())
			{
				case '=':
					Calcu.guardar_numero_dos();
					Calcu.memoria = Calcu.calcular();
					$('.form-control').val( Calcu.memoria );
					break;
				case 'CE':
					Calcu.limpiar();
					$('.form-control').val( Calcu.memoria );
				default:
					Calcu.guardar_numero_uno();
					Calcu.limpiar();
					Calcu.operador = $(this).text();
					$('.form-control').val( Calcu.memoria );
			}
		});
	});
}