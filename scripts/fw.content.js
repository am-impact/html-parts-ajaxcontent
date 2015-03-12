var FW = FW || {};

/**
 * Script om content dynamisch in te laden, om bijv performance gehele pagina te verbeteren
 */
FW.Content = ( function( window, undefined ) {
    /**
     * Error meldingen
     */
    function error( data ) {
        if( data.responseText ) {
            console.log( data.responseText );
        }
        else {
            console.log( data );
        }
    }

    /**
     * Regel de afhandeling van de data
     */
    function handleData( data, textStatus, jqXHR, $element ) {
        $element
            .html( data )
            .trigger('contentloaded');
    }

    /**
     * public function place
     *
     * @param   url         string
     * @param   $element    jQuery element
     * @param   callback    Functie ( niet verplicht )
     */
    function place( url, $element, callback ) {
        if( typeof url != 'string' ) { error('Url is niet correct'); }
        if( typeof $element != 'object' ) { error('Element moet een jQuery selector zijn'); }

        $.when( $.ajax( url ) )
            .then(
                function( data, textStatus, jqXHR ) {
                    handleData( data, textStatus, jqXHR, $element);

                    if (typeof callback == 'function') {
                        callback.call($element);
                    }
                },
                error
            );
    }

    /**
     * Place functie openbaar maken
     */
    return {
        place: place
    };
})( window );
