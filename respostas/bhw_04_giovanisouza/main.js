$(function(){

	$('.ordena').on('click', function(){
		var li = $('ul li');
		var div = $('div');
		
		var itens = li.map(function(i, elem) {
			return $(elem).text();
		}).get();
		
		itens.sort();
		div.html('');
	
		for (var i in itens)
			div.append(itens[i] + '<br>');
	});
	
	$('.remove').on('dblclick', function(){
		
		var item = $('ul li');
		
		item.eq(4).remove();
		item.eq(1).remove();

	});

	$('.formata').mouseout(function(){
		$('ul li').addClass('formato');
	});

	$('.inverte').hover(function(){
		
		var item = $('ul li');
		
		item.eq(0).insertAfter(item.eq(2));
		item.eq(1).insertBefore(item.eq(0));
	});
});