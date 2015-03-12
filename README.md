# html-parts-ajaxcontent

Uitbreiding op [html startup](https://github.com/am-impact/html-startup)

Script om content dynamisch in te laden, om bijv performance gehele pagina te verbeteren

## Bestanden
 * scripts/fw.content.js

## Voorbeelden

### Html
    <div class="element-1"><img src="resources/img/loader.gif"></div>
    <div class="element-2"><img src="resources/img/loader.gif"></div>

### Javascript
Voorbeeld: Event die je kan gebruiken na ophalen data

    FW.Content.place( 'pad/naar/ajaxurl', $('.element-1') );
    
    $('.element-1').on('contentloaded', function() {
        console.log('Event die wordt afgevuurd wanneer data voor ' + $(this) + ' is opgehaald'); 
    });
    
Voorbeeld: Callback functie na ophalen data
    
    FW.Content.place( 'pad/naar/ajaxurl', $('.element-2'), function() {
        console.log('Callback functie op ' + $(this) + ' element'); 
    });
    
