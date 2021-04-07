import React, { useCallback, useState } from 'react';
import DayPicker, { DayModifiers } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import { FiClock, FiPower } from 'react-icons/fi';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  NextAppointment,
  Calendar,
  Section,
  Appointment,
} from './styles';

import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = useCallback((day: Date, modifiers: DayModifiers) => {
    if (modifiers.available) {
      setSelectedDate(day);
    }
  }, []);

  const { signOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            <img src={user.avatar_url} alt={user.name} />
            <div>
              <span>Bem-vindo,</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <Schedule>
          <h1>Horários agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 07</span>
            <span>Segunda-feira</span>
          </p>

          <NextAppointment>
            <strong>Atendimento a seguir</strong>
            <div>
              <img
                src="https://instagram.fplu3-1.fna.fbcdn.net/v/t51.2885-19/s320x320/142518865_246545760376423_9106774206601750431_n.jpg?tp=1&_nc_ht=instagram.fplu3-1.fna.fbcdn.net&_nc_ohc=i6vmtggXArEAX8e58U5&edm=ABfd0MgAAAAA&ccb=7-4&oh=e193c3ccf5c162c6f6ec0d7810cc3c04&oe=6091C76B&_nc_sid=7bff83"
                alt="Pedro Paulo"
              />

              <strong>Pedro Paulo</strong>
              <span>
                <FiClock />
                08:00
              </span>
            </div>
          </NextAppointment>

          <Section>
            <strong>Manhã</strong>
            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>

              <div>
                <img
                  src="https://instagram.fplu3-1.fna.fbcdn.net/v/t51.2885-19/s320x320/142518865_246545760376423_9106774206601750431_n.jpg?tp=1&_nc_ht=instagram.fplu3-1.fna.fbcdn.net&_nc_ohc=i6vmtggXArEAX8e58U5&edm=ABfd0MgAAAAA&ccb=7-4&oh=e193c3ccf5c162c6f6ec0d7810cc3c04&oe=6091C76B&_nc_sid=7bff83"
                  alt="Pedro Paulo"
                />

                <strong>Pedro Paulo</strong>
              </div>
            </Appointment>

            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>

              <div>
                <img
                  src="https://instagram.fplu3-1.fna.fbcdn.net/v/t51.2885-19/s320x320/142518865_246545760376423_9106774206601750431_n.jpg?tp=1&_nc_ht=instagram.fplu3-1.fna.fbcdn.net&_nc_ohc=i6vmtggXArEAX8e58U5&edm=ABfd0MgAAAAA&ccb=7-4&oh=e193c3ccf5c162c6f6ec0d7810cc3c04&oe=6091C76B&_nc_sid=7bff83"
                  alt="Pedro Paulo"
                />

                <strong>Pedro Paulo</strong>
              </div>
            </Appointment>
          </Section>

          <Section>
            <strong>Tarde</strong>

            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>

              <div>
                <img
                  src="https://instagram.fplu3-1.fna.fbcdn.net/v/t51.2885-19/s320x320/142518865_246545760376423_9106774206601750431_n.jpg?tp=1&_nc_ht=instagram.fplu3-1.fna.fbcdn.net&_nc_ohc=i6vmtggXArEAX8e58U5&edm=ABfd0MgAAAAA&ccb=7-4&oh=e193c3ccf5c162c6f6ec0d7810cc3c04&oe=6091C76B&_nc_sid=7bff83"
                  alt="Pedro Paulo"
                />

                <strong>Pedro Paulo</strong>
              </div>
            </Appointment>
          </Section>
        </Schedule>
        <Calendar>
          <DayPicker
            weekdaysShort={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']}
            fromMonth={new Date()}
            disabledDays={[{ daysOfWeek: [0, 6] }]}
            modifiers={{
              available: { daysOfWeek: [1, 2, 3, 4, 5] },
            }}
            selectedDays={selectedDate}
            onDayClick={handleDateChange}
            months={[
              'Janeiro',
              'Fevereiro',
              'Março',
              'Abril',
              'Maio',
              'Junho',
              'Julho',
              'Agosto',
              'Setembro',
              'Outubro',
              'Novembro',
              'Dezembro',
            ]}
          />
        </Calendar>
      </Content>
    </Container>
  );
};

export default Dashboard;
