document.addEventListener('DOMContentLoaded', function() {
    // Ϊ��Ƭ��ӽ���Ч��
    const photos = document.querySelectorAll('.photo');
    photos.forEach((photo, index) => {
        photo.style.opacity = '0';
        setTimeout(() => {
            photo.style.transition = 'opacity 1s ease';
            photo.style.opacity = '1';
        }, index * 500);
    });

    // Ϊ������Ӵ��ֻ�Ч��
    const messages = document.querySelectorAll('.message p');
    messages.forEach((message, index) => {
        message.style.opacity = '0';
        setTimeout(() => {
            message.style.transition = 'opacity 1s ease';
            message.style.opacity = '1';
        }, index * 1000);
    });
}); 