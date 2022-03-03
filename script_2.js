let nombre;
nombre = prompt("Choisis un nombre ");
f=1;

for(i = 1; i <= nombre; i++)
	{
		f = f * i;   // ou f *= i;
	}

console.log(`le factoriel de ${nombre} est ${f}`);
