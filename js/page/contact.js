window.onload = function() {
    html_forms.on('success', function() {
        $('body').addClass('send');
        $('[data-contact-success]').append('<div class="contacts__ok" data-ok><div class="contacts__ok-wrap"><div class="contacts__ok-l"><div class="contacts__ok-round"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="none"><path d="M2.56 6.44a1.5 1.5 0 0 0-2.121 0 1.5 1.5 0 0 0 0 2.121l2.12-2.12zM6 12l-1.06 1.06a1.5 1.5 0 0 0 2.227-.117L6 12zm9.666-9.556A1.5 1.5 0 1 0 13.334.556l2.332 1.888zM.44 8.56l4.5 4.5 2.12-2.12-4.5-4.5L.44 8.56zm6.727 4.383l8.5-10.5L13.334.556l-8.5 10.5 2.332 1.888z" fill="#27ae60"/></svg></div><p>Thank you for message! We will answer you within 24 hours :)</p></div><a class="btn contacts__ok-btn" data-cont>Okay</a></div></div>');
        $('[data-cont]').click(function() {
            $('body').removeClass('send');
            $('[data-ok]').css('display','none');
        })
    });

}