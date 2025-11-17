import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('about');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { id: 'about', label: 'Обо мне' },
    { id: 'services', label: 'Услуги' },
    { id: 'works', label: 'Работы' },
    { id: 'contact', label: 'Контакты' },
  ];

  const services = [
    {
      icon: 'Palette',
      title: 'Графический дизайн',
      description: 'Создание фирменного стиля, логотипов и брендинга'
    },
    {
      icon: 'Layout',
      title: 'UI/UX дизайн',
      description: 'Проектирование интерфейсов и пользовательского опыта'
    },
    {
      icon: 'Globe',
      title: 'Веб-дизайн',
      description: 'Разработка дизайна сайтов и лендингов'
    }
  ];

  const works = [
    { id: 1, title: 'UI/UX Проект', category: 'UI/UX', image: 'https://cdn.poehali.dev/projects/20d03b4d-26c4-41c1-ad0f-38f258e233dc/files/26e1e725-c5f9-447b-9231-a4e62ca0a42b.jpg' },
    { id: 2, title: 'Брендинг', category: 'Брендинг', image: 'https://cdn.poehali.dev/projects/20d03b4d-26c4-41c1-ad0f-38f258e233dc/files/2470ea18-9ff7-4e49-b0a0-4f1e9a5b6d7b.jpg' },
    { id: 3, title: 'Веб-дизайн', category: 'Веб-дизайн', image: 'https://cdn.poehali.dev/projects/20d03b4d-26c4-41c1-ad0f-38f258e233dc/files/e6df5395-53a2-4317-a415-7484552cd50b.jpg' },
    { id: 4, title: 'Интерфейс приложения', category: 'UI/UX', image: 'https://cdn.poehali.dev/projects/20d03b4d-26c4-41c1-ad0f-38f258e233dc/files/26e1e725-c5f9-447b-9231-a4e62ca0a42b.jpg' },
    { id: 5, title: 'Фирменный стиль', category: 'Брендинг', image: 'https://cdn.poehali.dev/projects/20d03b4d-26c4-41c1-ad0f-38f258e233dc/files/2470ea18-9ff7-4e49-b0a0-4f1e9a5b6d7b.jpg' },
    { id: 6, title: 'Лендинг', category: 'Веб-дизайн', image: 'https://cdn.poehali.dev/projects/20d03b4d-26c4-41c1-ad0f-38f258e233dc/files/e6df5395-53a2-4317-a415-7484552cd50b.jpg' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">Portfolio</h1>
            <div className="flex gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    activeSection === item.id ? 'text-accent' : 'text-foreground/70'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="about" className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-6">
            <h2 className="text-5xl font-bold">Графический дизайнер</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Создаю визуальные решения для брендов и цифровых продуктов. 
              Специализируюсь на UI/UX дизайне, графике и веб-дизайне.
            </p>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Связаться со мной
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">Услуги</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow bg-card">
                <Icon name={service.icon} size={40} className="text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="works" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">Работы</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {works.map((work) => (
              <Card key={work.id} className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all">
                <div className="aspect-[4/3] bg-secondary relative overflow-hidden">
                  <img 
                    src={work.image} 
                    alt={work.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Icon name="ZoomIn" size={32} className="text-white" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">{work.title}</h3>
                  <p className="text-sm text-muted-foreground">{work.category}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Контакты</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <Card className="p-8 bg-card">
              <Icon name="Mail" size={32} className="text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">hello@designer.com</p>
            </Card>
            <Card className="p-8 bg-card">
              <Icon name="Phone" size={32} className="text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Телефон</h3>
              <p className="text-muted-foreground">+7 (999) 123-45-67</p>
            </Card>
            <Card className="p-8 bg-card">
              <Icon name="MessageCircle" size={32} className="text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Telegram</h3>
              <p className="text-muted-foreground">@designer</p>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>© 2024 Portfolio. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;