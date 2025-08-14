import MusicPlayer from '@/components/party/MusicPlayer';
import PartyManagement from '@/components/party/PartyManagement';
import QueueManagement from '@/components/party/QueueManagement';
import RoleManagement from '@/components/party/RoleManagement';
import { FloatingMessage } from '@/components/ui/Message';
import { useSearchParams } from 'next/navigation';

export default function Lobby() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const page_message = searchParams.get('message');

  // no party -> join/create party
  if (!id) {
    return (
      <>
        {page_message && page_message.trim() !== '' && <FloatingMessage>{page_message}</FloatingMessage>}
        <PartyManagement></PartyManagement>
      </>
    );
  }

  // party -> party room
  return (
    <>
      {page_message && page_message.trim() !== '' && <FloatingMessage>{page_message}</FloatingMessage>}
      <MusicPlayer></MusicPlayer>
      {/* These should be full screen popups */}
      <QueueManagement></QueueManagement>
      <RoleManagement></RoleManagement>
    </>
  );
}
