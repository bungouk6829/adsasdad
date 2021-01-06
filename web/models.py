from django.db import models

CALL_CHOICES = {
    ('call', '상담전화했음'),
    ('bad', '진상고객'),
    ('customer', '계약함'),
    ('wrong', '잘못된DB'),
}


class Information(models.Model):
    name = models.CharField(max_length=40, verbose_name='이름')
    phone_number = models.CharField(max_length=20, verbose_name='전화번호')
    call_attr = models.CharField(max_length=80, choices=CALL_CHOICES, null=True, blank=True, verbose_name='상태')
    check_call = models.CharField(max_length=80, null=True, blank=True, verbose_name='DB중복여부')
    create_at = models.DateTimeField(auto_now_add=True, verbose_name='날짜')

    def __str__(self):
        return str(self.name) + ' / ' + str(self.phone_number)

    class Meta:
        db_table = 'informations'
        verbose_name = '문의글'
        verbose_name_plural = '문의글'
