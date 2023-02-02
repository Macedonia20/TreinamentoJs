const namePerson = prompt('Escreva o nome do seu personagem');
const attackPower = prompt('Quanto é seu poder de ataque');
const name = prompt('Escreva o nome do opnente defensor');
let quantityOfLife = prompt('Quantidade de vida');
const opponentsDefense = prompt('Quanto é seu poder de defesa');
const haveAShield = prompt('Qual valor do seu escudo? (Sim/Não)');

let damageDone = 0;


if(attackPower > opponentsDefense && haveAShield === "Não" ) {
    damageDone = attackPower - opponentsDefense
} else if(attackPower > opponentsDefense && haveAShield === "Sim") {
    damageDone = attackPower - opponentsDefense / 2;
}
quantityOfLife -= damageDone;

alert(`${namePerson} causou ${damageDone} pontos de dano em ${name}`)
alert(`${namePerson}\n poder de ataque: ${attackPower} \n\n ${name} \n pontos de vida: ${quantityOfLife}
poder de defesa: ${opponentsDefense} \n possui escudo: ${haveAShield}  `)

