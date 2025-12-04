import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
      
      const sections = ['hero', 'about', 'story', 'match', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <span className="font-heading text-xl font-bold text-primary">Анна Усикова</span>
            <div className="hidden md:flex gap-6">
              <a 
                href="#about" 
                className={`transition-all duration-300 ${activeSection === 'about' ? 'text-accent font-semibold border-b-2 border-accent' : 'text-muted-foreground hover:text-primary'}`}
              >
                Обо мне
              </a>
              <a 
                href="#story" 
                className={`transition-all duration-300 ${activeSection === 'story' ? 'text-accent font-semibold border-b-2 border-accent' : 'text-muted-foreground hover:text-primary'}`}
              >
                Моя история
              </a>
              <a 
                href="#match" 
                className={`transition-all duration-300 ${activeSection === 'match' ? 'text-accent font-semibold border-b-2 border-accent' : 'text-muted-foreground hover:text-primary'}`}
              >
                Почему я?
              </a>
              <a 
                href="#contact" 
                className={`transition-all duration-300 ${activeSection === 'contact' ? 'text-accent font-semibold border-b-2 border-accent' : 'text-muted-foreground hover:text-primary'}`}
              >
                Контакты
              </a>
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-16">
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

      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-center mb-16 text-primary">
            Обо мне
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {[
              { icon: "Brain", title: "Психолог, организационный психолог" },
              { icon: "Users2", title: "Психолог-консультант, коуч в гештальт-подходе" },
              { icon: "Trophy", title: "Эксперт по развитию лидерского потенциала" }
            ].map((credential, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-all duration-300 animate-fade-in group cursor-pointer border-2 hover:border-accent text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <Icon name={credential.icon} className="text-accent group-hover:text-white" size={28} />
                </div>
                <h3 className="font-heading text-lg font-semibold text-primary leading-relaxed">{credential.title}</h3>
              </Card>
            ))}
          </div>

          <Card className="p-8 mb-8 border-2 hover:border-accent transition-all duration-300 animate-fade-in delay-200">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon name="Building2" className="text-secondary" size={24} />
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold text-primary mb-3">Опыт в компаниях</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Опыт в управлении талантами и развитии лидеров — <span className="font-bold text-primary">18+ лет</span> в компаниях от 350 до 49 000 человек.
                </p>
                <div className="flex flex-wrap gap-3 mb-4">
                  {["Лента", "Альфа-Банк", "Helix", "Kodeks", "Билайн", "Газпромтранс"].map((company, idx) => (
                    <span key={idx} className="px-4 py-2 bg-accent/10 text-accent rounded-full font-medium text-sm">
                      {company}
                    </span>
                  ))}
                  <span className="px-4 py-2 bg-muted text-muted-foreground rounded-full font-medium text-sm">
                    и другие
                  </span>
                </div>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Создаю и внедряю программы обучения и оценки для лидеров в федеральных компаниях, помогая им достигать самых амбициозных результатов.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-2 hover:border-accent transition-all duration-300 animate-fade-in delay-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon name="Star" className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold text-primary mb-4">Ключевые компетенции</h3>
                <ul className="space-y-3">
                  {[
                    "Разработка и проведение программ для руководителей",
                    "Создание и внедрение моделей компетенций и систем оценки",
                    "Построение систем кадрового резерва и наставничества",
                    "Коучинг и сопровождение руководителей"
                  ].map((competence, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Icon name="CheckCircle2" className="text-accent flex-shrink-0 mt-1" size={20} />
                      <span className="text-base text-muted-foreground">{competence}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section id="story" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-6 text-primary">
              Как всё начиналось
            </h2>
            <p className="text-xl text-secondary font-semibold">
              Моя история началась не в кабинете, а на линии поддержки
            </p>
          </div>
          
          <div className="space-y-8">
            <Card className="p-8 border-2 hover:border-accent transition-all duration-300 animate-fade-in delay-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Headphones" className="text-accent" size={28} />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-primary mb-4">Начало пути</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Ещё в студенчестве я пришла работать оператором в колл-центр «Билайна». Через три месяца меня пригласили стать тренером — потому что я искренне хотела помогать коллегам справляться со сложными звонками, стрессом, выгоранием. Тогда я поняла главное: <span className="font-semibold text-primary">обучение — это про людей.</span> Про то, как дать им уверенность, инструменты и поддержку.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-2 hover:border-accent transition-all duration-300 animate-fade-in delay-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="TrendingUp" className="text-secondary" size={28} />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-primary mb-4">19 лет опыта</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Эту нить я пронесла через все 19 лет карьеры. Через банк, розничную сеть, IT-компании. Каждое место учило меня чему-то ценному, но суть оставалась той же: <span className="font-semibold text-primary">я люблю зажигать в людях интерес к росту.</span> Видеть, как у коллег загораются глаза, когда они осваивают новый навык. Как руководитель начинает по-другому смотреть на свою команду. Как вся атмосфера в отделе становится светлее и продуктивнее.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-2 border-accent bg-accent/5 transition-all duration-300 animate-fade-in delay-300">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Sparkles" className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-primary mb-4">Что дальше?</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Мне кажется, что мы сможем создать вместе что-то действительно ценное для вашего <span className="font-semibold text-accent">Корпоративного Университета.</span>
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="match" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary/95 to-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-6 text-white">
              Почему мы подходим друг другу?
            </h2>
          </div>
          
          <div className="space-y-8">
            <Card className="p-8 bg-white border-2">
              <h3 className="font-heading text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                <Icon name="Target" className="text-accent" size={32} />
                Соответствие опыту
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Ваши ключевые задачи — моя ежедневная практика. Я не теоретик, а практик, который создаёт системы развития «под ключ».
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-accent">
                      <th className="text-left p-4 font-heading text-lg text-primary">Что ищете вы</th>
                      <th className="text-left p-4 font-heading text-lg text-primary">Что уже делала я</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        need: "Разработка и реализация программ обучения для бизнес-единиц",
                        experience: "Выстраивала стратегию обучения с нуля в международной компании (Janus Worldwide), создавала комплексные программы (например, «Лента Форвард» для линейных руководителей федеральной сети)."
                      },
                      {
                        need: "Организация командных сессий и фасилитация",
                        experience: "Регулярно проводила стратегические сессии, воркшопы и ретроспективы в «Ленте» и других компаниях, консультировала экспертов по самостоятельному ведению таких форматов."
                      },
                      {
                        need: "Создание онлайн-курсов как методолог",
                        experience: "Самостоятельно разрабатывала электронные курсы в iSpring Suite, внедряла и администрировала LMS (Mirapolis, Moodle), управляла наполнением платформ."
                      },
                      {
                        need: "Интеграция ИИ-инструментов в обучение",
                        experience: "Целенаправленно изучаю тему ИИ и внедряю лучшие инструменты в свою работу."
                      },
                      {
                        need: "Работа в ИТ-среде, понимание проектной работы",
                        experience: "Работала в ИТ-консалтинге («Кодекс Консорциум»), сопровождала адаптацию IT-специалистов, понимаю циклы и боли проектной работы."
                      }
                    ].map((row, idx) => (
                      <tr key={idx} className="border-b border-muted hover:bg-muted/30 transition-colors">
                        <td className="p-4 text-muted-foreground align-top">{row.need}</td>
                        <td className="p-4 text-muted-foreground align-top">{row.experience}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                <p className="text-base text-primary font-semibold">
                  <Icon name="Award" className="inline text-accent mr-2" size={20} />
                  Мой фундамент: 19 лет в L&D от тренера колл-центра до руководителя направления. Я прошла путь от помощи коллегам справляться со стрессом до построения общекорпоративных систем развития.
                </p>
              </div>
            </Card>

            <Card className="p-8 bg-white border-2 animate-fade-in delay-100">
              <h3 className="font-heading text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                <Icon name="Heart" className="text-accent" size={32} />
                Совпадение ключевых ценностей
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Я верю, что долгосрочный успех строится на ценностном совпадении. В описании вашей компании и вакансии я увидела не просто требования, а ценности, которые разделяю:
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    icon: "MessageSquare",
                    text: "Когда вы пишете про открытую культуру и минимум бюрократии — я вспоминаю, как сама внедряла портал в одной компании, чтобы наладить эффективную коммуникацию и упростить жизнь коллегам. Я верю в работу, которая приносит радость, а не в отчёты ради отчётов."
                  },
                  {
                    icon: "Users",
                    text: "Когда вы говорите про развитие и менторство — я думаю о своих учениках, которых готовила в «Ленте» и «Альфа-Банке». Многие из них теперь сами возглавляют отделы. Это самая большая профессиональная гордость."
                  },
                  {
                    icon: "Coffee",
                    text: "Когда вы упоминаете волейбол, бег и экологические программы — мне становится тепло. Для меня команда — это не просто коллеги по проектам. Это люди, с которыми можно после работы побегать в парке или устроить душевные посиделки."
                  }
                ].map((value, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                    <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={value.icon} className="text-accent" size={20} />
                    </div>
                    <p className="text-base text-muted-foreground leading-relaxed">{value.text}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 bg-white border-2 animate-fade-in delay-200">
              <h3 className="font-heading text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                <Icon name="Sparkles" className="text-accent" size={32} />
                Особый подход к работе
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Помимо опыта и ценностей, я принесу с собой то, что сложно вписать в резюме, но важно для эффективной совместной работы:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    number: "1",
                    title: "Умею слушать сердцем, а анализировать головой",
                    desc: "Я начинаю любой проект с вопросов и диалога. Моя история в колл-центре научила меня слышать не только слова, но и эмоции, скрытые потребности. Это помогает создавать программы, которые попадают точно в цель."
                  },
                  {
                    number: "2",
                    title: "Тёплая поддержка и создание безопасной среды",
                    desc: "Люди лучше всего учатся там, где им не страшно ошибаться. Я умею создавать такую атмосферу — и на стратегической сессии с топ-менеджерами, и на воркшопе для новичков. Обучение через радость и увлечённость — самый эффективный путь."
                  },
                  {
                    number: "3",
                    title: "Системное видение с человеческим лицом",
                    desc: "Я вижу связь между запуском программы обучения, пульс-опросами вовлечённости и снижением текучести. Мне важно, чтобы наша работа приносила измеримую пользу бизнесу, но никогда не забывала о человеке в центре всех этих процессов."
                  },
                  {
                    number: "4",
                    title: "Энергия соавторства",
                    desc: "Я ищу не просто позицию, а команду, с которой можно вместе строить, творить и расти. Готова быть не просто исполнителем, а вашим партнёром в развитии самого главного актива — людей!"
                  }
                ].map((approach, idx) => (
                  <div key={idx} className="p-6 bg-gradient-to-br from-accent/5 to-secondary/5 rounded-lg border border-accent/20 hover:border-accent transition-all">
                    <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-heading text-2xl font-bold mb-4">
                      {approach.number}
                    </div>
                    <h4 className="font-heading text-lg font-bold text-primary mb-3">{approach.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{approach.desc}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
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
            © 2025 Анна Усикова — Менеджер корпоративных программ развития
          </p>
        </div>
      </footer>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-accent text-white rounded-full shadow-lg hover:bg-accent/90 transition-all duration-300 flex items-center justify-center z-50 animate-fade-in hover:scale-110"
          aria-label="Наверх"
        >
          <Icon name="ArrowUp" size={24} />
        </button>
      )}
    </div>
  );
};

export default Index;