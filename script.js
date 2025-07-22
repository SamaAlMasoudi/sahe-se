
document.getElementById('inquiryForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const leaveNumber = document.getElementById('leaveNumber').value.trim();
  const identityCode = document.getElementById('identityCode').value.trim();

  const dataKey = `${leaveNumber}_${identityCode}`;
  const savedData = localStorage.getItem(dataKey);

  if (savedData) {
    localStorage.setItem("currentInquiry", dataKey);
    window.location.href = "result.html";
  } else {
    alert("رقم الإجازة أو رمز الهوية غير صحيح");
  }
});
