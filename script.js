$(window).load(function() {

$miss = false;	
	
//variable du top menu
$rev = 500;
$heure = 0;
    
//objet vaisseau
$vaisseau = { vie : 20,  capacite : 20, cale : 0, force : 2};

//affichage top menu
$('#rev').text($rev + "i") ;
$('#heure').html($heure + ":00" );
    
$('#exmission').append("<div id='misone'>choisi la mission 1</div>" );
    
//interface pop up de message
$visibilite = $('#message').is(':visible');
//tableau des message et titre    
$messtitre = ['Message de perso1','Message de perso2'];
$messtext = ['<div>voici votre message 1 <br/><input type="button" name="lien1" value="nom du lien" onclick="self.location.href="lien.html">', '<div>voici votre message 2 <br/><input type="button" name="lien2" value="nom du lien" onclick="self.location.href="lien.html">' ]
//affichage ou non du message
$('#message').hide();


//le clic sur le choix du menu vertical gauche   
$('#exmission').click(function(){
    $('#message').toggle();
});
	
//affichage du message
if($visibilite){
   $('#titre').text($messtitre[0]) ; 
    $('#contenu').html($messtext[0]);
}
$('#quit').click(function(){
    	$('#titre').text("") ; 
    	$('#contenu').html("");
		$('#message').hide();
});

//afficher les caracteristique vaisseau
	$('#aptitude').html('<p>santé : '+$vaisseau.vie+'</p>'+'<p>capacité : '+$vaisseau.capacite+'</p>'+'<p>cale : '+$vaisseau.cale+'</p>'+'<p>force : '+$vaisseau.force+'</p>');
	


//test svg
$('#Calque_1').click(function(){
    $('#message').toggle();
	$('#titre').text($messtitre[1]) ; 
    $('#contenu').html($messtext[1]);
});
	});
