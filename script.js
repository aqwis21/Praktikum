document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        const firstName = form.firstName.value.trim();
        const lastName = form.lastName.value.trim();
        const email = form.email.value.trim();
        const password = form.password.value;

        const errors = [];
        if (!firstName) errors.push("Введіть ім'я");
        if (!lastName) errors.push('Введіть прізвище');

        if (!email) {
            errors.push('Введіть електронну пошту');
        } else if (!/.+@.+\\..+/.test(email)) {
            errors.push('Невірний формат електронної пошти');
        }

        if (!password) {
            errors.push('Введіть пароль');
        } else if (password.length < 8) {
            errors.push('Пароль має містити щонайменше 8 символів');
        }

        if (errors.length) {
            e.preventDefault(); // блокуємо відправку, якщо є помилки
            alert(errors.join('\\n'));
        }
    });
});
