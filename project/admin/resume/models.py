from django.db import models
from enum import Enum
import random, string


# Create your models here.

# 個人情報テーブル
class PersonalInfo(models.Model):
    def __str__(self):
        return str(self.name)

    class GenderList(Enum):
        """性別リスト ISO5218に則る
        0 = not known（不明）
        1 = male（男性）
        2 = female（女性）
        9 = not applicable（適用不能）
        """
        not_known = (0, '不明')
        male = (1, '男性')
        female = (2, '女性')
        not_applicable = (3, '適用不能')

        @classmethod
        def get_value(cls, member):
            return cls[member].value[0]

    name = models.CharField(max_length=255, blank=True, null=True)
    name_kana = models.CharField(max_length=255, blank=True, null=True)
    name_initial = models.CharField(max_length=4, blank=True, null=True)
    birth_date = models.DateField(blank=True, null=True)
    gender = models.PositiveSmallIntegerField(
        choices=[x.value for x in GenderList],
        blank=True, null=True
    )
    academic_background = models.CharField(max_length=255, blank=True, null=True)
    nearlest_station = models.CharField(max_length=255, blank=True, null=True)
    license = models.TextField(blank=True, null=True) #資格
    skills = models.TextField(blank=True, null=True) #保有スキル
    good_at_task = models.TextField(blank=True, null=True) #得意業務
    pr = models.TextField(blank=True, null=True) #自己PR

# 経歴書テーブル
class Porject(models.Model):
    def __str__(self):
        return str(self.title)

    title = models.CharField(max_length=255, blank=True, null=True) #プロジェクト名
    detail = models.TextField(blank=True, null=True) #詳細
    charge = models.TextField(blank=True, null=True) #担当業務
    industry = models.CharField(max_length=255, blank=True, null=True) #業種
    role = models.CharField(max_length=255, blank=True, null=True) #役割
    total_size = models.PositiveIntegerField(blank=True, null=True) #全体の人数
    team_size = models.PositiveIntegerField(blank=True, null=True) #チームの人数
    os = models.CharField(max_length=255, blank=True, null=True)
    db = models.CharField(max_length=255, blank=True, null=True)
    language = models.CharField(max_length=255, blank=True, null=True)
    framework = models.CharField(max_length=255, blank=True, null=True)
    start_date = models.DateField(blank=True, null=True)
    end_date = models.DateField(blank=True, null=True)

    search = models.BooleanField(default=False) #技術調査
    requirements = models.BooleanField(default=False) #要件定義
    basic_design = models.BooleanField(default=False) #基本設計
    detail_design = models.BooleanField(default=False) #詳細設計
    dev_and_unit = models.BooleanField(default=False) #製造&単体テスト
    join_test = models.BooleanField(default=False) #結合テスト
    test = models.BooleanField(default=False) #総合テスト
    maintenance = models.BooleanField(default=False) #運用保守
    dev_env = models.BooleanField(default=False) #環境構築


# ダウンロード許可リストテーブル
class AccessbleUser(models.Model):
    def __str__(self):
        return str(self.email)

    name = models.CharField(max_length=255, blank=True, null=True)
    email = models.CharField(max_length=255, blank=True, null=True)
    password = models.CharField(max_length=255, blank=True, null=True)
    initial_flag = models.BooleanField(blank=True, null=True) # Trueなら名前をイニシャルにしてカナを表示しない

    def randomname(self, n):
        return ''.join(random.choices(string.ascii_letters + string.digits, k=n))

    def save(self, *args, **kwargs):
        self.password = self.randomname(8)

        super().save(*args, **kwargs)
