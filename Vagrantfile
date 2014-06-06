# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "hashicorp/precise64"
  config.vm.provision :shell, :path => "bootstrap.sh"
   require 'socket'
    local_ip = UDPSocket.open {|s| s.connect("<host_ip_here>", 1); s.addr.last}
    config.vm.provision "shell", inline: "echo \"#{local_ip} myapp.dev\" >> /etc/hosts"
  config.vm.network "forwarded_port", guest: 3001, host: 3002
end
