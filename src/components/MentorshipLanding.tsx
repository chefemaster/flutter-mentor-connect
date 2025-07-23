import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Check, Clock, Users, Video, MessageCircle, BookOpen, Trophy, Calendar, AlertCircle } from "lucide-react";
import heroImage from "@/assets/hero-mentorship.jpg";
import featuresImage from "@/assets/flutter-features.jpg";

const MentorshipLanding = () => {
  return (
    <div className="min-h-screen">
      {/* Alert Bar */}
      <div className="bg-warning text-white py-3 px-4">
        <div className="container mx-auto flex items-center justify-center gap-2 text-sm font-medium">
          <AlertCircle className="w-4 h-4" />
          <span>🔥 Apenas 10 vagas disponíveis! Próxima turma inicia em Setembro - Inscrições até quarta-feira!</span>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-flutter-blue to-flutter-blue-dark rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">PM</span>
            </div>
            <span className="font-bold text-xl">Mentoria Flutter</span>
          </div>
          <Button variant="outline">Contato</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-flutter-blue/5 to-flutter-blue/10 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="px-4 py-2">
                  <Trophy className="w-4 h-4 mr-2" />
                  Já formou 10+ alunos na mentoria e 500+ nos cursos
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  MENTORIA FLUTTER
                  <span className="block text-flutter-blue">PAULO MENDES</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Domine Gerenciamento de Estado e Arquitetura de Software no Flutter com acompanhamento personalizado e aulas ao vivo.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="hero" className="text-lg px-8 py-4">
                  Garantir Minha Vaga - R$ 497
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                  Saber Mais
                </Button>
              </div>

              <div className="flex items-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>8 semanas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>Máx. 10 alunos</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>1h/semana ao vivo</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src={heroImage} 
                alt="Mentoria Flutter em ação" 
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="/lovable-uploads/29c6c7a3-3457-40fd-9ca4-fb2836d13bdc.png" />
                    <AvatarFallback>PM</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Paulo Mendes</p>
                    <p className="text-sm text-muted-foreground">Mentor Flutter</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">O que você vai receber na mentoria?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Uma experiência completa de aprendizado com suporte total e ambiente colaborativo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Video className="w-8 h-8 text-flutter-blue" />,
                title: "Aulas ao Vivo",
                description: "1x por semana, 1 hora de duração com interação direta"
              },
              {
                icon: <BookOpen className="w-8 h-8 text-flutter-blue" />,
                title: "Conteúdo Exclusivo",
                description: "Material de apoio e conteúdos gravados exclusivos"
              },
              {
                icon: <MessageCircle className="w-8 h-8 text-flutter-blue" />,
                title: "Suporte Direto",
                description: "WhatsApp pessoal + grupo para tirar dúvidas"
              },
              {
                icon: <Users className="w-8 h-8 text-flutter-blue" />,
                title: "Networking",
                description: "Ambiente cooperativo para troca de experiências"
              },
              {
                icon: <Clock className="w-8 h-8 text-flutter-blue" />,
                title: "Gravações",
                description: "Acesso a todas as gravações das aulas ao vivo"
              },
              {
                icon: <Trophy className="w-8 h-8 text-flutter-blue" />,
                title: "Garantia",
                description: "Reembolso total em até 7 dias se não ficar satisfeito"
              }
            ].map((benefit, index) => (
              <Card key={index} className="border-2 hover:border-flutter-blue/20 transition-colors">
                <CardHeader>
                  <div className="mb-4">{benefit.icon}</div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-20 bg-gradient-to-br from-flutter-blue/5 to-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8">Conteúdo da Mentoria</h2>
              <div className="space-y-6">
                <Card className="border-l-4 border-l-flutter-blue">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-success" />
                      Gerenciamento de Estado
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Domine Provider, BLoC, Riverpod e outras soluções de state management
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-flutter-blue">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-success" />
                      Arquitetura de Software
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Clean Architecture, MVVM, Repository Pattern e boas práticas
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-flutter-blue">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-success" />
                      Projetos Práticos
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Desenvolva aplicações reais aplicando os conceitos aprendidos
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="relative">
              <img 
                src={featuresImage} 
                alt="Flutter Development Features" 
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Pré-requisitos</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-flutter-blue/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-success" />
                    Flutter & Dart Instalados
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Tenha o ambiente de desenvolvimento Flutter configurado em sua máquina
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-flutter-blue/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-success" />
                    Conhecimento em Dart
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Conhecimentos básicos da linguagem Dart para acompanhar as aulas
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-flutter-blue/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Nossos Alunos</h2>
            <p className="text-xl text-muted-foreground">
              Conheça alguns dos desenvolvedores que já passaram pela nossa mentoria
            </p>
          </div>

          <div className="flex justify-center items-center gap-4 mb-8">
            {/* Placeholder for student avatars */}
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Avatar key={i} className="w-16 h-16 border-4 border-white shadow-lg">
                <AvatarFallback className="bg-flutter-blue text-white">A{i}</AvatarFallback>
              </Avatar>
            ))}
            <div className="ml-4 text-center">
              <p className="text-2xl font-bold text-flutter-blue">10+</p>
              <p className="text-sm text-muted-foreground">Alunos na mentoria</p>
            </div>
          </div>

          <div className="text-center">
            <Badge variant="secondary" className="px-6 py-2">
              <Trophy className="w-4 h-4 mr-2" />
              Mais de 500 alunos formados nos cursos
            </Badge>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-flutter-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Transforme sua carreira como desenvolvedor Flutter
            </h2>
            <p className="text-xl mb-8 opacity-90">
              8 semanas de mentoria intensiva com suporte total e acesso vitalício ao conteúdo
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 max-w-md mx-auto">
              <div className="text-4xl font-bold mb-2">R$ 497</div>
              <p className="opacity-90">no PIX à vista</p>
              <p className="text-sm opacity-75 mt-2">ou em até 12x no cartão</p>
            </div>

            <div className="space-y-4 mb-8">
              <Button size="lg" variant="secondary" className="text-lg px-12 py-4 bg-white text-flutter-blue hover:bg-white/90">
                Quero Garantir Minha Vaga Agora!
              </Button>
              <p className="text-sm opacity-75">✅ Reembolso garantido em 7 dias se não ficar satisfeito</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-flutter-blue to-flutter-blue-dark rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">PM</span>
                </div>
                <span className="font-bold text-xl">Mentoria Flutter</span>
              </div>
              <p className="text-gray-400">
                Desenvolva suas habilidades em Flutter com mentoria personalizada e suporte completo.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contato</h3>
              <div className="space-y-2 text-gray-400">
                <p>WhatsApp: (11) 99999-9999</p>
                <p>Email: paulo@mentoriaflutter.com</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Mentoria</h3>
              <div className="space-y-2 text-gray-400">
                <p>8 semanas de acompanhamento</p>
                <p>Aulas ao vivo semanais</p>
                <p>Suporte via WhatsApp</p>
                <p>Garantia de 7 dias</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Mentoria Flutter Paulo Mendes. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MentorshipLanding;