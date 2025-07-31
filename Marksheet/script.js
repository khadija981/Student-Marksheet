  function generateResults() {
      const rows = document.querySelectorAll("#marksheet tbody tr");
      rows.forEach(row => {
        const inputs = row.querySelectorAll("input[type='number']");
        const nameInput = row.querySelector("input[type='text']");
        const totalCell = row.querySelector(".total");
        const percentageCell = row.querySelector(".percentage");
        const gradeCell = row.querySelector(".grade");

        const marks = Array.from(inputs).map(input => parseInt(input.value));
        if (!nameInput.value.trim() || marks.some(isNaN)) {
          totalCell.textContent = '';
          percentageCell.textContent = '';
          gradeCell.textContent = '';
          return;
        }

        const total = marks.reduce((a, b) => a + b, 0);
        const percentage = (total / 500) * 100;
        let grade = "";

        if (percentage >= 90) grade = "A+";
        else if (percentage >= 75) grade = "A";
        else if (percentage >= 60) grade = "B";
        else if (percentage >= 50) grade = "C";
        else grade = "Fail";

        totalCell.textContent = total + "/500";
        percentageCell.textContent = percentage.toFixed(2) + "%";
        gradeCell.textContent = grade;
      });
    }