$(window).load(function() {


$rev = 500;
$heure = 0;
$visibilite = $('#message').is(':visible');
$messtitre = ['Message de perso1','Message de perso2'];
$messtext = ['<div>voici votre message 1 <br/><input type="button" name="lien1" value="nom du lien" onclick="self.location.href="lien.html">', '<div>voici votre message 2 <br/><input type="button" name="lien2" value="nom du lien" onclick="self.location.href="lien.html">' ]

$('#message').hide();
$('#rev').text($rev + "i") ;
$('#heure').html($heure + ":00" );
$('#exmission').append("<div id='misone'>choisi la mission 1</div>" );
    
$('#exmission').click(function(){
    $('#message').toggle();
     
});
if($visibilite){
   $('#titre').text($messtitre[0]) ; 
    $('#contenu').html($messtext[0]);

}

});
