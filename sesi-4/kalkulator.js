export function kalkulator(nilai1, nilai2, operasi) {
  switch (operasi) {
    case "tambah":
      return nilai1 + nilai2;

    case "kurang":
      return nilai1 - nilai2;

    case "kali":
      return nilai1 * nilai2;

    case "bagi":
      if (nilai2 === 0) {
        return "Error: Can't divide by zero!";
      }
      return nilai1 / nilai2;

    case "pangkat":
      return nilai1 ** nilai2;

    default:
      return "Operasi tidak dikenali!";
  }
}