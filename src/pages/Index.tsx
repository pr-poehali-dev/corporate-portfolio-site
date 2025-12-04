import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
        
        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center animate-fade-in">
          <div className="text-center lg:text-left space-y-6">
            <div className="mb-6 animate-fade-in">
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">
                Менеджер корпоративных программ развития
              </h2>
            </div>
            
            <h1 className="font-heading text-2xl sm:text-3xl lg:text-3xl font-normal text-primary leading-relaxed animate-fade-in delay-200">
              Привет! Меня зовут Анна.
            </h1>
            
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed animate-fade-in delay-[400ms]">
              Когда я читала вашу вакансию, у меня возникло то самое чувство уверенности и вдохновения, которое бывает, когда находишь не просто работу, а свое место. За формальными требованиями я увидела ценности, близкие мне, и задачи, для решения которых у меня есть не только опыт, но и внутренний огонь.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4 animate-fade-in delay-[600ms]">
              <a href="mailto:annasmail@yandex.ru">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                  <Icon name="Mail" size={20} className="mr-2" />
                  Связаться со мной
                </Button>
              </a>
              <a href="#" download="Anna_Usikova_Resume.pdf">
                <Button size="lg" variant="outline">
                  <Icon name="Download" size={20} className="mr-2" />
                  Скачать резюме
                </Button>
              </a>
            </div>
          </div>
          
          <div className="relative animate-slide-in-right">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-secondary/20 rounded-3xl blur-3xl"></div>
            <img 
              src="https://cdn.poehali.dev/files/d8c3f017-0a04-48c7-9909-8ac10ffac70b.jpg"
              alt="Менеджер корпоративных программ развития"
              className="relative rounded-3xl shadow-2xl w-full max-w-lg mx-auto object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-center mb-16 text-primary">
            Факты обо мне
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "Briefcase", title: "7+ лет", desc: "в корпоративном обучении и развитии", delay: "delay-100" },
              { icon: "Users", title: "500+", desc: "сотрудников прошли мои программы", delay: "delay-200" },
              { icon: "Target", title: "95%", desc: "успешных внедрений проектов", delay: "delay-300" },
              { icon: "Award", title: "15+", desc: "корпоративных программ запущено", delay: "delay-[400ms]" }
            ].map((fact, idx) => (
              <Card key={idx} className={`p-6 hover:shadow-lg transition-all duration-300 animate-fade-in ${fact.delay} group cursor-pointer border-2 hover:border-accent`}>
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <Icon name={fact.icon} className="text-accent group-hover:text-white" size={24} />
                </div>
                <h3 className="font-heading text-3xl font-bold text-primary mb-2">{fact.title}</h3>
                <p className="text-muted-foreground">{fact.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-6 text-primary">
              Как всё начиналось
            </h2>
            <p className="text-xl text-muted-foreground">
              Моя история началась не в кабинете, а на линии поддержки
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-secondary to-primary hidden md:block"></div>
            
            <div className="space-y-12">
              {[
                {
                  year: "2017",
                  title: "С чего началось",
                  desc: "Первая работа в техподдержке научила меня главному — слушать людей и понимать их настоящие потребности. Каждый звонок был уроком эмпатии.",
                  icon: "Headphones"
                },
                {
                  year: "2019",
                  title: "Поворот к развитию",
                  desc: "Заметил, что большинство проблем клиентов можно решить правильным обучением. Стал создавать обучающие материалы для команды — и это сработало.",
                  icon: "BookOpen"
                },
                {
                  year: "2021",
                  title: "Первая программа",
                  desc: "Разработал и запустил комплексную программу адаптации новых сотрудников. Время адаптации сократилось с 3 месяцев до 6 недель.",
                  icon: "Rocket"
                },
                {
                  year: "2023-2024",
                  title: "Масштаб и системность",
                  desc: "Построил отдел корпоративного обучения с нуля: от найма тренеров до создания LMS. Управлял 15+ программами развития одновременно.",
                  icon: "Building2"
                }
              ].map((milestone, idx) => (
                <div key={idx} className={`relative pl-0 md:pl-24 animate-slide-in-left delay-${idx * 100}`}>
                  <div className="absolute left-0 top-0 w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-2xl flex items-center justify-center shadow-lg hidden md:flex">
                    <Icon name={milestone.icon} className="text-white" size={28} />
                  </div>
                  
                  <Card className="p-6 md:p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-accent">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="md:hidden w-12 h-12 bg-gradient-to-br from-accent to-secondary rounded-xl flex items-center justify-center">
                        <Icon name={milestone.icon} className="text-white" size={20} />
                      </div>
                      <span className="font-heading text-2xl font-bold text-accent">{milestone.year}</span>
                    </div>
                    <h3 className="font-heading text-2xl font-bold mb-3 text-primary">{milestone.title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">{milestone.desc}</p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary/95 to-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-6 text-white">
              Почему мы подходим друг другу?
            </h2>
            <p className="text-xl text-white/80">
              Вот что я могу принести в вашу команду
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "Brain",
                title: "Системное мышление",
                desc: "Вижу картину целиком: от стратегии до конкретных метрик. Не просто запускаю программы, а встраиваю их в бизнес-процессы."
              },
              {
                icon: "Zap",
                title: "Быстрое внедрение",
                desc: "Умею делать MVP и тестировать гипотезы. Не трачу годы на планирование — запускаю, измеряю, улучшаю."
              },
              {
                icon: "Users2",
                title: "Эмпатия к людям",
                desc: "Путь от техподдержки научил слышать настоящие потребности. Создаю программы, которые действительно нужны сотрудникам."
              },
              {
                icon: "TrendingUp",
                title: "Фокус на результат",
                desc: "Говорю на языке бизнеса: ROI, метрики эффективности, влияние на ключевые показатели компании."
              },
              {
                icon: "Lightbulb",
                title: "Инновации в обучении",
                desc: "Использую современные форматы: микрообучение, геймификацию, адаптивные треки развития."
              },
              {
                icon: "Shield",
                title: "Надёжность",
                desc: "95% успешных проектов. Умею работать с ограничениями, дедлайнами и меняющимися приоритетами."
              }
            ].map((reason, idx) => (
              <Card key={idx} className="p-6 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 animate-fade-in hover:scale-105">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-4">
                  <Icon name={reason.icon} className="text-white" size={24} />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3 text-white">{reason.title}</h3>
                <p className="text-white/80 leading-relaxed">{reason.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-6 text-primary">
              Мои контакты
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Мне будет искренне интересно услышать ваше видение, обсудить конкретные задачи и кейсы, понять, как мой опыт и ценности могут помочь «КОРУС Консалтинг» стать ещё сильнее.
            </p>
            <p className="text-2xl font-heading font-semibold text-primary mb-12">
              Анна Усикова
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
            {[
              { icon: "Mail", label: "Email", value: "annasmail@yandex.ru", link: "mailto:annasmail@yandex.ru" },
              { icon: "Phone", label: "Телефон", value: "+7 (962) 729-69-15", link: "tel:+79627296915" }
            ].map((contact, idx) => (
              <a 
                key={idx}
                href={contact.link}
                className="block group"
              >
                <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:border-accent border-2 hover:scale-105">
                  <Icon name={contact.icon} className="text-accent mb-3 mx-auto group-hover:scale-110 transition-transform" size={32} />
                  <p className="text-sm text-muted-foreground mb-1">{contact.label}</p>
                  <p className="font-medium text-primary group-hover:text-accent transition-colors">{contact.value}</p>
                </Card>
              </a>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-300">
            <a href="mailto:annasmail@yandex.ru">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8">
                <Icon name="Send" size={20} className="mr-2" />
                Написать мне
              </Button>
            </a>
            <a href="tel:+79627296915">
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Icon name="Phone" size={20} className="mr-2" />
                Позвонить
              </Button>
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/60">
            © 2024 Анна Усикова — Менеджер корпоративных программ развития
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;