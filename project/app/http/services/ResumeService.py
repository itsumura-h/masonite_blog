import datetime, math
from app.models.resume.PersonalInfo import PersonalInfo
from app.models.resume.Project import Project
import pprint

class ResumeService:

    def create_pdf(self):
        personal_info = PersonalInfo.get_my_profile()
        #年齢を生成
        PersonalInfo.age = self.__get_age(personal_info.birth_date)

        #今日の日付を取得
        personal_info.today = datetime.datetime.today().strftime('%Y年%m月%d日')

        #生年月日の表記を変換
        personal_info.birth_date = self.__convert_date_to_japanese(personal_info.birth_date)

        projects = Project.get_projects()
        for project in projects:
            #プロジェクトの期間を算出
            project.term = self.__get_project_term(project.start_date, project.end_date)

            # プロジェクトの開始日終了日を日本語に変換
            project.start_date = self.__convert_date_to_japanese(project.start_date)
            project.end_date = self.__convert_date_to_japanese(project.end_date)

        return personal_info, projects

    def __get_age(self, birth_date:str)->int:
        birth_date = datetime.datetime.strptime(birth_date, '%Y-%m-%d')
        now = datetime.datetime.now()
        age = math.floor((now - birth_date).days / 365)
        return age

    def __convert_date_to_japanese(self, birth_date:str)->str:
        birth_date = birth_date.split('-')
        return f'{birth_date[0]}年{birth_date[1]}月{birth_date[2]}日'

    def __get_project_term(self, start_date:str, end_date:str)->str:
        start_date = datetime.datetime.strptime(start_date, '%Y-%m-%d')
        end_date = datetime.datetime.strptime(end_date, '%Y-%m-%d')
        result = math.floor((end_date - start_date).days / 30)
        if result < 1:
            result = 1
        return f'{result}ヶ月間'