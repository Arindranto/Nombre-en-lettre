const threeDigits = (nbr) => {
    // Ecriture d'un nombre à trois chiffres
    let l = ["","un ","deux ","trois ","quatre ","cinq ","six ","sept ","huit ","neuf ","dix ","onze ","douze ","treize ","quatorze ","quinze ","seize "];
    // décomposition
    let c= parseInt(nbr/100);
    let d= parseInt((nbr%100)/10);
    let u= nbr%100%10, letter='';
    //let letter="";
    if (d*10+u<17)
        letter=l[d*10 + u];
    else{
        // Cela dépend de la dizaine
        switch (d){
            case 1:
                letter="dix ";
                break;
            case 8:
                letter="quatre ";
            case 2:
                letter= "vingt "+letter;
                break;
            case 3:
                letter="trente ";
                break;
            case 4:
                letter="quarante ";
                break;
            case 5:
                letter="cinquante ";
                break;
            case 7:
                if (u<7)
                    letter=l[10+u];
                else
                    letter="dix "+l[u];
            case 6:
                letter="soixante "+letter;
                break;
            case 9:
                letter="quatre vingt ";
                if (u<7)
                    letter=letter+l[10+u];
                else
                    letter=letter+"dix "+l[u];
                break;
        }
        if (d!=9 && d!=7)
            letter=letter+l[u];
    }
    // centaine
    if (c){
        letter="cent "+letter;
        if (c!=1)
            letter=l[c]+letter;
    }
    return letter;
}

const toLetter = (nbr) => {
    let letter=""; // Contiendra l'écriture en toute lettre
    // Si zéro
    if (!nbr)
        letter="zéro";
    else{
        // Sinon
        let i=0; // comptera les mlliers
        let tmp=nbr; // Servira à décomposer le nombre
        while (tmp){
            let tD=tmp%1000; // Three digits number
            // Ecrire en fonction de i
            // Si il ne s'agit pas de zéro
            if (tD){
                switch (i){
                    // Mille
                    case 3:
                        letter="mille "+letter;
                        break;
                    // Million
                    case 6:
                        letter="million " + letter;
                        break;
                    // Milliard
                    case 9:
                        letter="milliard " + letter;
                        break;
                    // Mille milliard
                    case 12:
                        letter="mille milliard " + letter;
                        break;
                }
            }
            // Ajout des expressions en centaine
            // Exception d'écriture pour mille
            if ((i!=3) || (tD!=1))
                letter=threeDigits(tD) + letter;
            tmp=parseInt(tmp/1000);
            i+=3;
        }
    }
    return letter;
}