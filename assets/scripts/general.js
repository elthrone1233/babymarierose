const copyBtns = document.querySelectorAll('.copy-address')
copyBtns.forEach(btn => {
    const copyIcon = document.querySelectorAll('.copy-address-copy-icon')
    const checkIcon = document.querySelectorAll('.copy-address-copy-check')

    btn.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText('0x63cb29Fd3EB538C969F73aee6f3d78bEFD041C95');
            copyIcon.forEach(icon => icon.style.display = 'none');
            checkIcon.forEach(icon => icon.style.display = 'block');

            setTimeout(() => {
                copyIcon.forEach(icon => icon.style.display = 'block');
                checkIcon.forEach(icon => icon.style.display = 'none');
            }, 2000);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    })
})

