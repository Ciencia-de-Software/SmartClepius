export default function isCpf(cpf: string) {
    let sum = 0;
    let rest: number;
    if (cpf === '00000000000') {
      return false;
    }

    for (let i = 1; i <= 9; i++) {
      sum = sum + Number(cpf.substring(i - 1, i)) * (11 - i);
    }

    rest = (sum * 10) % 11;
    if ((rest === 10) || (rest === 11)) {
      rest = 0;
    }

    if (rest !== Number(cpf.substring(9, 10))) {
       return false;
    }

    sum = 0;
    for (let i = 1; i <= 10; i++) {
      sum = sum + Number(cpf.substring(i - 1, i)) * (12 - i);
    }

    rest = (sum * 10) % 11;

    if ((rest === 10) || (rest === 11)) {
      rest = 0;
    }
    if (rest !== Number(cpf.substring(10, 11) ))  {
      return false;
    }

    return true;
  }
